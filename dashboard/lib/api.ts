function cfg() {
  return {
    apiKey: localStorage.getItem('sd_api_key') || '',
    apiUrl: (localStorage.getItem('sd_api_url') || '').replace(/\/$/, ''),
  };
}

async function request(path: string, options: RequestInit = {}) {
  const { apiKey, apiUrl } = cfg();
  const res = await fetch(`${apiUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      ...(options.headers ?? {}),
    },
  });
  if (res.status === 204) return null;
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail ?? `HTTP ${res.status}`);
  return data;
}

export const api = {
  get:    (path: string)                => request(path),
  post:   (path: string, body: unknown) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put:    (path: string, body: unknown) => request(path, { method: 'PUT',  body: JSON.stringify(body) }),
  delete: (path: string)                => request(path, { method: 'DELETE' }),

  workflows: {
    graph: () => request('/workflows/graph'),
    stats: () => request('/workflows/stats'),
  },

  automation: {
    templates: ()                              => request('/automation/templates'),
    run:       (template_id: string, user_input: string) =>
      request('/automation/run', { method: 'POST', body: JSON.stringify({ template_id, user_input }) }),
    runs:      ()                              => request('/automation/runs'),
    getRun:    (id: string)                    => request(`/automation/runs/${id}`),
  },

  uploadFile: async (path: string, file: File) => {
    const { apiKey, apiUrl } = cfg();
    const form = new FormData();
    form.append('file', file);
    const res = await fetch(`${apiUrl}${path}`, {
      method: 'POST',
      headers: { 'x-api-key': apiKey },
      body: form,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail ?? 'Upload failed');
    return data;
  },
};
