'use client';
import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
  input_label: string;
  category?: string;
}

interface Run {
  id: string;
  template_name: string;
  user_input: string;
  status: 'running' | 'completed' | 'failed';
  created_at: string;
}

const STATUS_COLOR: Record<string, string> = {
  running:   'bg-yellow-100 text-yellow-800 border-yellow-200',
  completed: 'bg-green-100 text-green-800 border-green-200',
  failed:    'bg-red-100 text-red-800 border-red-200',
};

export default function AutomationPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [runs, setRuns]           = useState<Run[]>([]);
  const [selected, setSelected]   = useState<Template | null>(null);
  const [input, setInput]         = useState('');
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const [fetchError, setFetchError] = useState('');

  // Filtering states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    api.automation.templates()
      .then((data: Template[]) => {
        setTemplates(data || []);
      })
      .catch((e: any) => setFetchError(e.message ?? 'Failed to load templates'));
    api.automation.runs().then(setRuns).catch(() => {});
  }, []);

  // Compute unique categories from templates
  const categories = useMemo(() => {
    if (!templates.length) return ['All'];
    const set = new Set<string>();
    templates.forEach(t => {
      if (t.category) set.add(t.category);
    });
    return ['All', ...Array.from(set).sort()];
  }, [templates]);

  // Filter templates based on Category and Search Query
  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchesCat =
        selectedCategory === 'All' ||
        (t.category && t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        t.name.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        (t.category && t.category.toLowerCase().includes(query));

      return matchesCat && matchesQuery;
    });
  }, [templates, selectedCategory, searchQuery]);

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
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">500 AI Agent Teams</h1>
            <p className="text-sm text-gray-500 mt-1">
              Multi-agent crews categorized by industry niche to execute complex workflows end-to-end.
            </p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1.5 rounded-xl text-xs font-semibold">
            ⚡ {templates.length} Live Crews
          </div>
        </div>
      </div>

      {/* Category Filter & Search Section */}
      <section className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search 500 agents by keyword, role, or niche..."
              className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Dropdown (Mobile) */}
          <div className="sm:hidden">
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories (500)' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pill Buttons (Desktop/Tablet) */}
        <div className="hidden sm:block">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Filter by Category:
          </div>
          <div className="flex flex-wrap gap-2 max-h-44 overflow-y-auto pr-1">
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {cat === 'All' ? `All (${templates.length})` : cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Template picker list */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Select an Agent Team ({filteredTemplates.length})
          </h2>
          {selectedCategory !== 'All' && (
            <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-lg">
              Filtered: {selectedCategory}
            </span>
          )}
        </div>

        {fetchError && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
            <span className="font-semibold">Could not load templates:</span> {fetchError}
            <br />
            <span className="text-xs mt-1 block">Try logging out and back in — your backend URL may be outdated.</span>
          </div>
        )}

        {filteredTemplates.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center text-gray-500">
            <p className="text-base font-semibold">No agents found</p>
            <p className="text-xs mt-1">Try broadening your search term or selecting "All Categories".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs bg-indigo-50 text-indigo-600 font-semibold px-3 py-1.5 rounded-lg hover:bg-indigo-100"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[560px] overflow-y-auto pr-1">
            {filteredTemplates.map(t => {
              const isSelected = selected?.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => { setSelected(t); setInput(''); setError(''); }}
                  className={`text-left p-4 rounded-2xl border-2 transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/60 shadow-md ring-2 ring-indigo-500/20'
                      : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-2xl p-2 bg-gray-50 rounded-xl border border-gray-100">{t.icon}</div>
                      {t.category && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md border border-gray-200 truncate max-w-[130px]">
                          {t.category}
                        </span>
                      )}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm leading-snug">{t.name}</div>
                    <div className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">{t.description}</div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-indigo-600 font-medium">
                    <span>{isSelected ? '✓ Selected' : 'Select Crew'}</span>
                    <span>→</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Run form */}
      {selected && (
        <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md space-y-4 ring-1 ring-indigo-500/20">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-indigo-50 rounded-xl border border-indigo-100">{selected.icon}</span>
              <div>
                <div className="font-bold text-gray-900">{selected.name}</div>
                <div className="text-xs text-gray-500">{selected.category || 'Specialized Agent Crew'}</div>
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              ✕ Close
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              {selected.input_label}
            </label>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={3}
              className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white resize-none"
              placeholder={`Enter details for ${selected.name}...`}
            />
          </div>

          {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-xl border border-red-200">{error}</p>}

          <div className="flex justify-end gap-3">
            <button
              onClick={handleRun}
              disabled={loading || !input.trim()}
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Executing Agent Team…</span>
                </>
              ) : (
                <>
                  <span>▶ Run Crew</span>
                </>
              )}
            </button>
          </div>
        </section>
      )}

      {/* Run history */}
      {runs.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Recent Executions</h2>
          <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100 shadow-sm overflow-hidden">
            {runs.slice(0, 10).map(r => (
              <button
                key={r.id}
                onClick={() => router.push(`/automation/${r.id}`)}
                className="w-full text-left px-5 py-3.5 hover:bg-gray-50/80 transition-colors flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-gray-900">{r.template_name}</div>
                  <div className="text-xs text-gray-500 truncate mt-0.5">{r.user_input}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${STATUS_COLOR[r.status] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                    {r.status}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(r.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
