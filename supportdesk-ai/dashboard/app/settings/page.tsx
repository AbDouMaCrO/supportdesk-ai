'use client';
import { useEffect, useState } from 'react';
import { AuthGuard } from '@/components/AuthGuard';
import { useAuth } from '@/contexts/AuthContext';
import { api } from '@/lib/api';

export default function SettingsPage() {
  const { apiKey, apiUrl } = useAuth();
  const [name, setName]           = useState('');
  const [prompt, setPrompt]       = useState('');
  const [saving, setSaving]       = useState(false);
  const [success, setSuccess]     = useState('');
  const [error, setError]         = useState('');
  const [copied, setCopied]       = useState(false);

  useEffect(() => {
    api.get('/analytics')
      .then(() => {
        // analytics doesn't return name/prompt; fetch from settings via a workaround:
        // We'll use the businesses endpoint directly
      })
      .catch(() => {});

    // Load current settings by fetching analytics and then the business name from storage
    // (we don't have a GET /settings endpoint, so load from localStorage fallback)
    setName(localStorage.getItem('sd_biz_name') ?? '');
    setPrompt(localStorage.getItem('sd_biz_prompt') ?? '');
  }, []);

  const save = async () => {
    setSaving(true);
    setError('');
    setSuccess('');
    try {
      const patch: Record<string, string> = {};
      if (name.trim())   patch.name          = name.trim();
      if (prompt.trim()) patch.system_prompt = prompt.trim();
      await api.put('/settings', patch);
      localStorage.setItem('sd_biz_name', name);
      localStorage.setItem('sd_biz_prompt', prompt);
      setSuccess('Settings saved.');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  const embedSnippet = `<script>
  window.SupportDeskConfig = {
    apiKey: '${apiKey}',
    apiUrl: '${apiUrl}',
    title:  'Support',
  };
</script>
<script src="${apiUrl}/widget.js" defer></script>`;

  const copySnippet = () => {
    navigator.clipboard.writeText(embedSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AuthGuard>
      <div className="max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

        {error   && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>}
        {success && <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-sm">✓ {success}</div>}

        {/* Business Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h2 className="font-semibold text-gray-900">Business</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Acme Corp"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">AI System Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="You are a helpful customer support agent for Acme Corp. Be friendly and concise."
            />
            <p className="text-xs text-gray-400 mt-1">Controls how the AI introduces itself and responds.</p>
          </div>

          <button
            onClick={save}
            disabled={saving}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving…' : 'Save Settings'}
          </button>
        </div>

        {/* API Key */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-900 mb-3">API Key</h2>
          <code className="block bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-mono text-gray-700 break-all">
            {apiKey}
          </code>
          <p className="text-xs text-gray-400 mt-2">Keep this private. Use it in the widget and API requests.</p>
        </div>

        {/* Embed Snippet */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-900">Widget Embed Code</h2>
            <button
              onClick={copySnippet}
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs font-mono text-gray-700 overflow-x-auto whitespace-pre-wrap">
            {embedSnippet}
          </pre>
          <p className="text-xs text-gray-400 mt-2">
            Paste before <code className="font-mono">&lt;/body&gt;</code> on any page. The chat bubble appears instantly.
          </p>
        </div>
      </div>
    </AuthGuard>
  );
}
