'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AuthGuard } from '@/components/AuthGuard';
import { api } from '@/lib/api';

interface Ticket {
  id: string;
  status: string;
  assignee: string | null;
  created_at: string;
  conversations: { session_id: string; messages: { role: string; content: string }[]; created_at: string };
}

const STATUS_OPTIONS = ['open', 'in_progress', 'resolved'];

const STATUS_BADGE: Record<string, string> = {
  open:        'bg-red-100 text-red-700',
  in_progress: 'bg-yellow-100 text-yellow-700',
  resolved:    'bg-green-100 text-green-700',
};

export default function TicketsPage() {
  const [status, setStatus]   = useState('open');
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  const load = (s: string) => {
    setLoading(true);
    setError('');
    api.get(`/tickets?status=${s}`)
      .then((data) => setTickets(data as Ticket[]))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(status); }, [status]);

  const lastMessage = (t: Ticket) => {
    const msgs = t.conversations?.messages ?? [];
    const last = msgs.filter((m) => m.role === 'user').at(-1);
    return last?.content?.slice(0, 80) ?? '—';
  };

  return (
    <AuthGuard>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
          <div className="flex gap-2">
            {STATUS_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  status === s
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
                }`}
              >
                {s.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {error && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}

        {loading ? (
          <div className="text-center py-16 text-gray-400">Loading…</div>
        ) : tickets.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center text-gray-400 shadow-sm border border-gray-100">
            <p className="text-3xl mb-3">🎉</p>
            <p className="text-sm">No {status.replace('_', ' ')} tickets.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tickets.map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_BADGE[t.status]}`}>
                      {t.status.replace('_', ' ')}
                    </span>
                    {t.assignee && (
                      <span className="text-xs text-gray-400">→ {t.assignee}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 truncate">{lastMessage(t)}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(t.created_at).toLocaleString()}</p>
                </div>
                <Link
                  href={`/tickets/${t.id}?session=${t.conversations?.session_id}`}
                  className="shrink-0 text-sm bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg hover:bg-indigo-100 font-medium transition-colors"
                >
                  Open →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
