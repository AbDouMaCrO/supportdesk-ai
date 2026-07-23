'use client';
import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { api } from '@/lib/api';

interface AgentOutput {
  role: string;
  output: string;
}

interface Run {
  id: string;
  template_name: string;
  template_id: string;
  user_input: string;
  status: 'running' | 'completed' | 'failed';
  result: AgentOutput[] | null;
  error: string | null;
  created_at: string;
}

export default function RunDetailPage() {
  const { run_id } = useParams<{ run_id: string }>();
  const router = useRouter();
  const [run, setRun] = useState<Run | null>(null);

  const load = useCallback(() => {
    api.automation.getRun(run_id).then(setRun).catch(() => {});
  }, [run_id]);

  useEffect(() => {
    load();
  }, [load]);

  // Poll while running
  useEffect(() => {
    if (run?.status !== 'running') return;
    const id = setInterval(load, 3000);
    return () => clearInterval(id);
  }, [run?.status, load]);

  if (!run) {
    return (
      <div className="p-6 flex items-center gap-2 text-gray-500 text-sm">
        <span className="animate-spin">⏳</span> Loading…
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => router.push('/automation')} className="text-gray-400 hover:text-gray-600 text-sm">
          ← Back
        </button>
        <div>
          <h1 className="text-xl font-bold text-gray-900">{run.template_name}</h1>
          <p className="text-xs text-gray-500 mt-0.5">{new Date(run.created_at).toLocaleString()}</p>
        </div>
      </div>

      {/* Input */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Task Input</div>
        <p className="text-sm text-gray-800 whitespace-pre-wrap">{run.user_input}</p>
      </div>

      {/* Status */}
      {run.status === 'running' && (
        <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
          <span className="animate-spin text-lg">⚙️</span>
          Agents working… results appear automatically when done.
        </div>
      )}

      {run.status === 'failed' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          <span className="font-semibold">Run failed:</span> {run.error}
        </div>
      )}

      {/* Agent outputs */}
      {run.result && run.result.map((step, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-indigo-600 px-4 py-2.5 flex items-center gap-2">
            <span className="text-white text-xs font-semibold uppercase tracking-wide">
              Agent {i + 1}
            </span>
            <span className="text-indigo-200 text-xs">·</span>
            <span className="text-indigo-100 text-xs">{step.role}</span>
          </div>
          <div className="p-4">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
              {step.output}
            </pre>
          </div>
        </div>
      ))}

      {/* Copy final output */}
      {run.result && run.result.length > 0 && (
        <button
          onClick={() => {
            const last = run.result![run.result!.length - 1];
            navigator.clipboard.writeText(last.output);
          }}
          className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
        >
          📋 Copy final output
        </button>
      )}
    </div>
  );
}
