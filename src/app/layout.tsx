'use client';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { Roboto } from 'next/font/google';
import { JoshChat } from '@/components/joshChat';
import Providers from '@/components/joshChat/Providers';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const metadata = {
  title: 'Taguara Digital Chatbot',
  description: 'Tu herramienta para apoyar a tus clientes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} m-0 bg-purple-900`}>
        <Provider store={store}>
          <Providers>
            <Header />
            <div className="relative">{children}</div>
            <JoshChat />
            <Footer />
          </Providers>
        </Provider>
      </body>
    </html>
  );
}
