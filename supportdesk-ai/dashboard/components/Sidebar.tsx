'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const NAV = [
  { href: '/dashboard',      label: 'Dashboard',      icon: '📊' },
  { href: '/tickets',        label: 'Tickets',        icon: '🎫' },
  { href: '/conversations',  label: 'Conversations',  icon: '💬' },
  { href: '/knowledge-base', label: 'Knowledge Base', icon: '📚' },
  { href: '/settings',       label: 'Settings',       icon: '⚙️'  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router   = useRouter();
  const { logout } = useAuth();

  return (
    <aside className="w-56 bg-gray-900 text-white flex flex-col h-screen fixed left-0 top-0 z-20">
      <div className="p-5 border-b border-gray-700">
        <h1 className="font-bold text-lg leading-tight">SupportDesk AI</h1>
        <p className="text-xs text-gray-400 mt-0.5">Admin Dashboard</p>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {NAV.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              pathname.startsWith(href)
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span className="text-base">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-700">
        <button
          onClick={() => { logout(); router.push('/login'); }}
          className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
