'use client';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

interface GraphNode { id: string; label: string; type: string; description: string; }
interface WorkflowGraph { nodes: GraphNode[]; edges: Array<{ from: string; to: string }>; state_schema: string[]; }
interface Trace { session_id: string; message_count: number; escalated: boolean; created_at: string; nodes_traversed: string[]; }
interface WorkflowStats {
  total_workflow_runs: number;
  total_conversations: number;
  escalated_count: number;
  escalation_rate: number;
  rag_index_loaded: boolean;
  kb_files: number;
  kb_filenames: string[];
  recent_traces: Trace[];
}

const NODE_STYLE: Record<string, { bg: string; border: string; label: string }> = {
  rag:      { bg: 'bg-blue-50',   border: 'border-blue-400',   label: 'text-blue-700'   },
  decision: { bg: 'bg-amber-50',  border: 'border-amber-400',  label: 'text-amber-700'  },
  llm:      { bg: 'bg-green-50',  border: 'border-green-400',  label: 'text-green-700'  },
  end:      { bg: 'bg-gray-100',  border: 'border-gray-300',   label: 'text-gray-500'   },
};

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-bold text-gray-900 mt-1">{value}</div>
      {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
    </div>
  );
}

export default function WorkflowsPage() {
  const [graph, setGraph]   = useState<WorkflowGraph | null>(null);
  const [stats, setStats]   = useState<WorkflowStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState('');

  useEffect(() => {
    Promise.all([api.workflows.graph(), api.workflows.stats()])
      .then(([g, s]) => { setGraph(g); setStats(s); })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6 text-sm text-gray-400">Loading…</div>;
  if (error)   return <div className="p-6 text-sm text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 space-y-6 max-w-5xl">
      <div>
        <h1 className="text-xl font-bold text-gray-900">LangGraph Workflows</h1>
        <p className="text-sm text-gray-500 mt-0.5">Stateful RAG pipeline · graph state transitions · multi-node orchestration</p>
      </div>

      {/* Graph Visualization */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Workflow Graph</h2>
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {graph?.nodes.map((node, i) => {
            const s = NODE_STYLE[node.type] ?? NODE_STYLE.end;
            return (
              <div key={node.id} className="flex items-center gap-3 flex-shrink-0">
                <div className={`rounded-xl border-2 ${s.bg} ${s.border} px-4 py-3 w-40 text-center`}>
                  <div className={`font-semibold text-sm ${s.label}`}>{node.label}</div>
                  <div className="text-xs text-gray-400 mt-1 leading-tight">{node.description}</div>
                </div>
                {i < (graph?.nodes.length ?? 0) - 1 && (
                  <svg width="28" height="16" viewBox="0 0 28 16" className="flex-shrink-0 text-gray-300">
                    <line x1="0" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
                    <polyline points="14,3 20,8 14,13" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="text-xs font-semibold text-gray-500 mb-2">State Schema</div>
          <div className="flex flex-wrap gap-1.5">
            {graph?.state_schema.map(f => (
              <span key={f} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs rounded font-mono">{f}</span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-3 flex gap-4 text-xs text-gray-400">
          <span><span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-1" />RAG</span>
          <span><span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-1" />Decision</span>
          <span><span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1" />LLM</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Workflow Runs" value={stats?.total_workflow_runs ?? 0} sub="total messages processed" />
        <StatCard label="Conversations" value={stats?.total_conversations ?? 0} />
        <StatCard label="Escalation Rate" value={`${stats?.escalation_rate ?? 0}%`} sub={`${stats?.escalated_count ?? 0} escalated`} />
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">RAG Index</div>
          <div className={`text-lg font-bold mt-1 ${stats?.rag_index_loaded ? 'text-green-600' : 'text-gray-400'}`}>
            {stats?.rag_index_loaded ? 'Active' : 'Standby'}
          </div>
          <div className="text-xs text-gray-400 mt-0.5">
            {stats?.kb_files ?? 0} file{stats?.kb_files !== 1 ? 's' : ''} in KB
          </div>
        </div>
      </div>

      {/* RAG Pipeline */}
      {(stats?.kb_files ?? 0) > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">RAG Pipeline · Knowledge Base</h2>
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-2 h-2 rounded-full ${stats?.rag_index_loaded ? 'bg-green-500' : 'bg-gray-300'}`} />
            <span className="text-sm text-gray-600">
              FAISS vector index {stats?.rag_index_loaded ? 'loaded in memory' : 'will load on first chat'}
            </span>
          </div>
          <div className="space-y-1.5">
            {stats?.kb_filenames.map(f => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-500">
                <span className="text-gray-300">📄</span>
                <span className="font-mono">{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Traces */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recent Workflow Runs</h2>
        </div>
        {stats?.recent_traces.length ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  {['Session', 'Nodes Traversed', 'Messages', 'Escalated', 'When'].map(h => (
                    <th key={h} className="text-left px-4 py-2 text-xs text-gray-500 font-medium whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats.recent_traces.map(t => (
                  <tr key={t.session_id} className="border-t border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-2.5 font-mono text-xs text-gray-500">{t.session_id.slice(0, 10)}…</td>
                    <td className="px-4 py-2.5">
                      <div className="flex gap-1 flex-wrap">
                        {t.nodes_traversed.map(n => (
                          <span key={n} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-mono whitespace-nowrap">{n}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-gray-600 text-center">{t.message_count}</td>
                    <td className="px-4 py-2.5">
                      {t.escalated
                        ? <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded-full font-medium">Yes</span>
                        : <span className="text-gray-300 text-xs">—</span>}
                    </td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs whitespace-nowrap">
                      {new Date(t.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="px-4 py-8 text-center text-sm text-gray-400">
            No workflow runs yet. Start a chat to see traces here.
          </div>
        )}
      </div>
    </div>
  );
}
