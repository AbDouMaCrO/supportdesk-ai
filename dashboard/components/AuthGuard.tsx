'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Sidebar } from './Sidebar';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { apiKey, isReady } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isReady && !apiKey) router.push('/login');
  }, [apiKey, isReady, router]);

  if (!isReady || !apiKey) return null;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-56 flex-1 bg-gray-50 p-8">{children}</main>
    </div>
  );
}
