'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
  input_label: string;
}

interface Run {
  id: string;
  template_name: string;
  user_input: string;
  status: 'running' | 'completed' | 'failed';
  created_at: string;
}

const STATUS_COLOR: Record<string, string> = {
  running:   'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  failed:    'bg-red-100 text-red-800',
};

export default function AutomationPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [runs, setRuns]           = useState<Run[]>([]);
  const [selected, setSelected]   = useState<Template | null>(null);
  const [input, setInput]         = useState('');
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  useEffect(() => {
    api.automation.templates().then(setTemplates).catch(() => {});
    api.automation.runs().then(setRuns).catch(() => {});
  }, []);

  const handleRun = async () => {
    if (!selected || !input.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await api.automation.run(selected.id, input.trim());
      router.push(`/automation/${res.run_id}`);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Automation</h1>
        <p className="text-sm text-gray-500 mt-1">AI agent crews that handle business tasks end-to-end.</p>
      </div>

      {/* Template picker */}
      <section>
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Choose a Crew</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map(t => (
            <button
              key={t.id}
              onClick={() => { setSelected(t); setInput(''); setError(''); }}
              className={`text-left p-4 rounded-xl border-2 transition-all ${
                selected?.id === t.id
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="text-2xl mb-2">{t.icon}</div>
              <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
              <div className="text-xs text-gray-500 mt-1">{t.description}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Run form */}
      {selected && (
        <section className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">{selected.icon}</span>
            <span className="font-semibold text-gray-900">{selected.name}</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{selected.input_label}</label>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder={`e.g. ${selected.input_label}...`}
            />
          </div>
          {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
          <button
            onClick={handleRun}
            disabled={loading || !input.trim()}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Starting…' : '▶ Run Crew'}
          </button>
        </section>
      )}

      {/* Run history */}
      {runs.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Recent Runs</h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {runs.map(r => (
              <button
                key={r.id}
                onClick={() => router.push(`/automation/${r.id}`)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="font-medium text-sm text-gray-900">{r.template_name}</div>
                  <div className="text-xs text-gray-500 truncate mt-0.5">{r.user_input}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLOR[r.status] ?? 'bg-gray-100 text-gray-600'}`}>
                    {r.status}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(r.created_at).toLocaleDateString()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
