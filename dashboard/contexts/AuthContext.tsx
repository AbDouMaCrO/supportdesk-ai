'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AuthCtx {
  apiKey: string;
  apiUrl: string;
  isReady: boolean;
  setCredentials: (key: string, url: string) => void;
  logout: () => void;
}

const Ctx = createContext<AuthCtx>({} as AuthCtx);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [apiKey, setApiKey] = useState('');
  const [apiUrl, setApiUrl] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setApiKey(localStorage.getItem('sd_api_key') ?? '');
    setApiUrl(localStorage.getItem('sd_api_url') ?? '');
    setIsReady(true);
  }, []);

  const setCredentials = (key: string, url: string) => {
    localStorage.setItem('sd_api_key', key);
    localStorage.setItem('sd_api_url', url);
    setApiKey(key);
    setApiUrl(url);
  };

  const logout = () => {
    localStorage.removeItem('sd_api_key');
    localStorage.removeItem('sd_api_url');
    setApiKey('');
    setApiUrl('');
  };

  return (
    <Ctx.Provider value={{ apiKey, apiUrl, isReady, setCredentials, logout }}>
      {children}
    </Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);
