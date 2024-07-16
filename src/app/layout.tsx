// app/layout.tsx

import { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}