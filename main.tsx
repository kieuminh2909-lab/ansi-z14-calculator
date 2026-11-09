import React from 'react';
import { createRoot } from 'react-dom/client';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import App from './App';
import './index.css';

// Open external http(s) links in the system browser instead of inside the app
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null;
  if (a && /^https?:/i.test(a.href) && Capacitor.isNativePlatform()) {
    e.preventDefault();
    Browser.open({ url: a.href });
  }
});

createRoot(document.getElementById('root')!).render(<App />);
