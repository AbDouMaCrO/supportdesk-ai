'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
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
  updated_at: string;
}

export default function ConversationDetailPage() {
  const { session_id } = useParams<{ session_id: string }>();
  const [conv, setConv]   = useState<Conversation | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/conversations/${session_id}`)
      .then((data) => setConv(data as Conversation))
      .catch((e: Error) => setError(e.message));
  }, [session_id]);

  return (
    <AuthGuard>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/conversations" className="text-sm text-gray-400 hover:text-gray-700">← Conversations</Link>
          {conv?.escalated && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
              escalated
            </span>
          )}
        </div>

        {error && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-5 py-4 border-b border-gray-100">
            <p className="text-xs text-gray-400 font-mono">{session_id}</p>
            {conv && (
              <p className="text-xs text-gray-400 mt-0.5">
                {new Date(conv.created_at).toLocaleString()} · {conv.messages.length} messages
              </p>
            )}
          </div>

          <div className="p-5 space-y-3">
            {conv?.messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-sm px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
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

            {!conv && !error && (
              <p className="text-center text-gray-400 py-8 text-sm">Loading…</p>
            )}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
