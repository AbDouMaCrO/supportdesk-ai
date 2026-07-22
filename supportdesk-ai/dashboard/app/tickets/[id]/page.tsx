'use client';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthGuard } from '@/components/AuthGuard';
import { api } from '@/lib/api';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  agent?: string;
}

interface Conversation {
  session_id: string;
  messages: Message[];
  escalated: boolean;
  created_at: string;
}

export default function TicketDetailPage() {
  const { id }      = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const sessionId   = searchParams.get('session') ?? '';
  const router      = useRouter();

  const [conv, setConv]       = useState<Conversation | null>(null);
  const [reply, setReply]     = useState('');
  const [agentName, setName]  = useState('Support Agent');
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState('');

  useEffect(() => {
    if (!sessionId) return;
    api.get(`/conversations/${sessionId}`)
      .then((data) => setConv(data as Conversation))
      .catch((e: Error) => setError(e.message));
  }, [sessionId]);

  const sendReply = async () => {
    if (!reply.trim()) return;
    setSending(true);
    try {
      await api.post(`/tickets/${id}/reply`, { message: reply, agent_name: agentName });
      setReply('');
      const updated = await api.get(`/conversations/${sessionId}`);
      setConv(updated as Conversation);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSending(false);
    }
  };

  const resolve = async () => {
    await api.put(`/tickets/${id}`, { status: 'resolved' });
    router.push('/tickets');
  };

  return (
    <AuthGuard>
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/tickets" className="text-sm text-gray-400 hover:text-gray-700">← Tickets</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-600 font-mono">{sessionId?.slice(0, 24)}…</span>
        </div>

        {error && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}

        {/* Conversation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Conversation</h2>
            <button
              onClick={resolve}
              className="text-sm bg-green-50 text-green-700 px-3 py-1.5 rounded-lg hover:bg-green-100 font-medium transition-colors"
            >
              ✓ Mark Resolved
            </button>
          </div>

          <div className="p-5 space-y-3 max-h-96 overflow-y-auto">
            {conv?.messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm ${
                    m.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  {m.agent && (
                    <p className="text-xs font-semibold text-indigo-400 mb-1">{m.agent}</p>
                  )}
                  {m.content}
                </div>
              </div>
            ))}

            {!conv && (
              <p className="text-center text-gray-400 py-8 text-sm">Loading conversation…</p>
            )}
          </div>
        </div>

        {/* Reply box */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Reply as Agent</h3>
          <div className="mb-3">
            <input
              type="text"
              value={agentName}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48"
              placeholder="Your name"
            />
          </div>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none mb-3"
            placeholder="Type your reply…"
          />
          <button
            onClick={sendReply}
            disabled={sending || !reply.trim()}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {sending ? 'Sending…' : 'Send Reply'}
          </button>
        </div>
      </div>
    </AuthGuard>
  );
}
