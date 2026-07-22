'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AuthGuard } from '@/components/AuthGuard';
import { api } from '@/lib/api';

interface Conversation {
  id: string;
  session_id: string;
  escalated: boolean;
  created_at: string;
  updated_at: string;
}

export default function ConversationsPage() {
  const [convs, setConvs]   = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState('');

  useEffect(() => {
    api.get('/conversations')
      .then((data) => setConvs(data as Conversation[]))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthGuard>
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Conversations</h1>

        {error && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}

        {loading ? (
          <div className="text-center py-16 text-gray-400">Loading…</div>
        ) : convs.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center text-gray-400 shadow-sm border border-gray-100">
            <p className="text-3xl mb-3">💬</p>
            <p className="text-sm">No conversations yet. Embed the widget to get started.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-50">
            {convs.map((c) => (
              <Link
                key={c.id}
                href={`/conversations/${c.session_id}`}
                className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-gray-700">{c.session_id.slice(0, 32)}…</span>
                    {c.escalated && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                        escalated
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Last activity: {new Date(c.updated_at).toLocaleString()}
                  </p>
                </div>
                <span className="text-gray-300 text-lg">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
