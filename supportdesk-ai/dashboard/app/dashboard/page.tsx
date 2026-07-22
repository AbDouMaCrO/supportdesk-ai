'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AuthGuard } from '@/components/AuthGuard';
import { api } from '@/lib/api';

interface Analytics {
  total_conversations: number;
  escalated: number;
  total_chats: number;
  open_tickets: number;
  resolved_tickets: number;
  plan: string;
  plan_limit: number;
}

interface Ticket {
  id: string;
  status: string;
  created_at: string;
  conversations: { session_id: string; messages: unknown[] };
}

function StatCard({ label, value, sub, color = 'indigo' }: {
  label: string; value: string | number; sub?: string; color?: string;
}) {
  const ring = color === 'amber' ? 'border-l-amber-400' : color === 'green' ? 'border-l-green-400' : 'border-l-indigo-500';
  return (
    <div className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 border-l-4 ${ring}`}>
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [tickets, setTickets]     = useState<Ticket[]>([]);
  const [error, setError]         = useState('');

  useEffect(() => {
    Promise.all([api.get('/analytics'), api.get('/tickets?status=open')])
      .then(([a, t]) => { setAnalytics(a); setTickets((t as Ticket[]).slice(0, 5)); })
      .catch((e: Error) => setError(e.message));
  }, []);

  return (
    <AuthGuard>
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {error && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">{error}</div>
        )}

        {analytics && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              label="Total Chats"
              value={analytics.total_chats}
              sub={`of ${analytics.plan_limit} on ${analytics.plan}`}
            />
            <StatCard label="Conversations" value={analytics.total_conversations} />
            <StatCard label="Escalated" value={analytics.escalated} color="amber" />
            <StatCard label="Open Tickets" value={analytics.open_tickets} color={analytics.open_tickets > 0 ? 'amber' : 'green'} />
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Recent Open Tickets</h2>
            <Link href="/tickets" className="text-sm text-indigo-600 hover:underline">
              View all →
            </Link>
          </div>

          {tickets.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <p className="text-2xl mb-2">✅</p>
              <p className="text-sm">No open tickets. All clear!</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-50">
              {tickets.map((t) => (
                <li key={t.id} className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {t.conversations?.session_id?.slice(0, 28)}…
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {new Date(t.created_at).toLocaleString()}
                    </p>
                  </div>
                  <Link
                    href={`/tickets/${t.id}?session=${t.conversations?.session_id}`}
                    className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg hover:bg-indigo-100 font-medium transition-colors"
                  >
                    View
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AuthGuard>
  );
}
