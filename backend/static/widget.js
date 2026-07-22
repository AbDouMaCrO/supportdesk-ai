/**
 * SupportDesk AI — embeddable chat widget.
 *
 * Usage on any website:
 *   <script>
 *     window.SupportDeskConfig = {
 *       apiKey: 'YOUR_API_KEY',
 *       apiUrl: 'https://your-backend.railway.app',
 *       title:  'Support',          // optional
 *       color:  '#6366f1',          // optional
 *     };
 *   </script>
 *   <script src="https://your-cdn/widget.js" defer></script>
 */

(function () {
  'use strict';

  const cfg = window.SupportDeskConfig || {};
  const API_KEY = cfg.apiKey;
  const API_URL = (cfg.apiUrl || '').replace(/\/$/, '');
  const COLOR   = cfg.color || '#6366f1';
  const TITLE   = cfg.title || 'Support';

  if (!API_KEY) {
    console.error('[SupportDesk] window.SupportDeskConfig.apiKey is required');
    return;
  }

  const SESSION_ID = 'sd_' + Math.random().toString(36).slice(2) + Date.now();

  // ── Styles ────────────────────────────────────────────────────────────────

  const css = `
    #sd-bubble {
      position:fixed;bottom:24px;right:24px;z-index:9999;
      width:56px;height:56px;border-radius:50%;
      background:${COLOR};color:#fff;border:none;cursor:pointer;
      font-size:24px;box-shadow:0 4px 16px rgba(0,0,0,.25);
      display:flex;align-items:center;justify-content:center;
      transition:transform .15s;
    }
    #sd-bubble:hover{transform:scale(1.08);}
    #sd-badge{
      position:absolute;top:-2px;right:-2px;background:#ef4444;color:#fff;
      border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:700;
      display:none;align-items:center;justify-content:center;
    }
    #sd-panel{
      position:fixed;bottom:96px;right:24px;z-index:9998;
      width:360px;max-height:540px;border-radius:16px;
      box-shadow:0 8px 32px rgba(0,0,0,.18);background:#fff;
      display:none;flex-direction:column;overflow:hidden;
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    }
    #sd-panel.open{display:flex;}
    #sd-header{
      background:${COLOR};color:#fff;padding:14px 18px;
      font-weight:600;font-size:15px;
      display:flex;align-items:center;justify-content:space-between;
      flex-shrink:0;
    }
    #sd-close{background:none;border:none;color:#fff;cursor:pointer;font-size:22px;line-height:1;}
    #sd-messages{
      flex:1;overflow-y:auto;padding:14px;
      display:flex;flex-direction:column;gap:10px;
    }
    .sd-msg{
      max-width:82%;padding:10px 13px;border-radius:12px;
      font-size:14px;line-height:1.45;word-break:break-word;
    }
    .sd-msg.user{
      align-self:flex-end;background:${COLOR};color:#fff;
      border-bottom-right-radius:3px;
    }
    .sd-msg.bot{
      align-self:flex-start;background:#f3f4f6;color:#111;
      border-bottom-left-radius:3px;
    }
    .sd-msg.escalated{
      background:#fef3c7;color:#92400e;
      border-left:3px solid #f59e0b;
    }
    .sd-typing{
      align-self:flex-start;background:#f3f4f6;
      padding:10px 14px;border-radius:12px;
    }
    .sd-typing span{
      display:inline-block;width:6px;height:6px;background:#9ca3af;
      border-radius:50%;margin:0 2px;
      animation:sd-bounce .8s infinite;
    }
    .sd-typing span:nth-child(2){animation-delay:.16s;}
    .sd-typing span:nth-child(3){animation-delay:.32s;}
    @keyframes sd-bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}
    #sd-footer{
      padding:10px;border-top:1px solid #e5e7eb;
      display:flex;gap:8px;flex-shrink:0;
    }
    #sd-input{
      flex:1;border:1px solid #e5e7eb;border-radius:8px;
      padding:8px 11px;font-size:14px;font-family:inherit;
      outline:none;resize:none;max-height:100px;overflow-y:auto;
    }
    #sd-input:focus{border-color:${COLOR};}
    #sd-send{
      background:${COLOR};color:#fff;border:none;
      border-radius:8px;padding:0 14px;cursor:pointer;
      font-size:18px;transition:opacity .15s;flex-shrink:0;
    }
    #sd-send:disabled{opacity:.45;cursor:default;}
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── DOM ───────────────────────────────────────────────────────────────────

  const bubble = document.createElement('button');
  bubble.id = 'sd-bubble';
  bubble.setAttribute('aria-label', 'Open support chat');
  bubble.innerHTML = `<span id="sd-badge"></span>💬`;

  const panel = document.createElement('div');
  panel.id = 'sd-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Support chat');
  panel.innerHTML = `
    <div id="sd-header">
      <span>${TITLE}</span>
      <button id="sd-close" aria-label="Close chat">×</button>
    </div>
    <div id="sd-messages">
      <div class="sd-msg bot">👋 Hi! How can I help you today?</div>
    </div>
    <div id="sd-footer">
      <textarea id="sd-input" rows="1" placeholder="Type a message…"></textarea>
      <button id="sd-send" aria-label="Send">➤</button>
    </div>
  `;

  document.body.appendChild(bubble);
  document.body.appendChild(panel);

  const badge      = bubble.querySelector('#sd-badge');
  const messagesEl = panel.querySelector('#sd-messages');
  const inputEl    = panel.querySelector('#sd-input');
  const sendBtn    = panel.querySelector('#sd-send');
  let unread = 0;

  // ── Toggle ────────────────────────────────────────────────────────────────

  function openPanel() {
    panel.classList.add('open');
    bubble.setAttribute('aria-expanded', 'true');
    unread = 0;
    badge.style.display = 'none';
    inputEl.focus();
  }

  function closePanel() {
    panel.classList.remove('open');
    bubble.setAttribute('aria-expanded', 'false');
  }

  bubble.addEventListener('click', () =>
    panel.classList.contains('open') ? closePanel() : openPanel()
  );
  panel.querySelector('#sd-close').addEventListener('click', closePanel);

  // ── Messaging ─────────────────────────────────────────────────────────────

  function addMessage(text, type) {
    const el = document.createElement('div');
    el.className = 'sd-msg ' + type;
    el.textContent = text;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'sd-typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  async function send() {
    const text = inputEl.value.trim();
    if (!text || sendBtn.disabled) return;

    inputEl.value = '';
    inputEl.style.height = 'auto';
    sendBtn.disabled = true;

    addMessage(text, 'user');
    const typing = showTyping();

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({ session_id: SESSION_ID, message: text }),
      });

      const data = await res.json();
      typing.remove();

      if (!res.ok) {
        addMessage(data.detail || 'Something went wrong. Please try again.', 'bot');
      } else {
        addMessage(data.response, data.escalated ? 'escalated' : 'bot');
        if (!panel.classList.contains('open')) {
          unread++;
          badge.textContent = unread;
          badge.style.display = 'flex';
        }
      }
    } catch {
      typing.remove();
      addMessage('Connection error. Please try again.', 'bot');
    }

    sendBtn.disabled = false;
    inputEl.focus();
  }

  sendBtn.addEventListener('click', send);

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  inputEl.addEventListener('input', () => {
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + 'px';
  });
})();
