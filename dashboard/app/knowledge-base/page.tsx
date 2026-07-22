'use client';
import { useEffect, useRef, useState } from 'react';
import { AuthGuard } from '@/components/AuthGuard';
import { api } from '@/lib/api';

interface KBFile {
  id: string;
  filename: string;
  created_at: string;
}

export default function KnowledgeBasePage() {
  const [files, setFiles]       = useState<KBFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError]       = useState('');
  const [success, setSuccess]   = useState('');
  const inputRef                = useRef<HTMLInputElement>(null);

  const load = () =>
    api.get('/kb')
      .then((data) => setFiles(data as KBFile[]))
      .catch((e: Error) => setError(e.message));

  useEffect(() => { load(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    setSuccess('');
    try {
      await api.uploadFile('/kb/upload', file);
      setSuccess(`"${file.name}" uploaded and indexed.`);
      await load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const handleDelete = async (id: string, filename: string) => {
    if (!confirm(`Delete "${filename}"?`)) return;
    setError('');
    try {
      await api.delete(`/kb/${id}`);
      await load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <AuthGuard>
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
            <p className="text-sm text-gray-500 mt-1">Upload .txt or .md files — the AI answers from these.</p>
          </div>
          <label className={`cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
            {uploading ? 'Uploading…' : '+ Upload File'}
            <input
              ref={inputRef}
              type="file"
              accept=".txt,.md"
              className="hidden"
              onChange={handleUpload}
              disabled={uploading}
            />
          </label>
        </div>

        {error   && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}
        {success && <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm">✓ {success}</div>}

        {files.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center text-gray-400 shadow-sm border border-gray-100 border-dashed">
            <p className="text-3xl mb-3">📄</p>
            <p className="text-sm font-medium">No files yet</p>
            <p className="text-xs mt-1">Upload your product docs, FAQs, or any .txt/.md file</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-50">
            {files.map((f) => (
              <div key={f.id} className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📄</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{f.filename}</p>
                    <p className="text-xs text-gray-400">{new Date(f.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(f.id, f.filename)}
                  className="text-sm text-red-500 hover:text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
