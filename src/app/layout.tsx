import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

const title = 'TrackExpense - Track your monthly expenses like a to-do list';
const description =
  'TrackExpense makes budgeting simple. Organize your monthly expenses like a to-do list, set bill reminders, and track spending effortlessly.';

const images = [
  {
    url: 'https://trackexpense.app/trackexpense.png',
    width: 1024,
    height: 500,
    alt: 'TrackExpense - Smart Expense Tracker App',
  },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://trackexpense.app'),
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trackexpense.app',
    siteName: 'TrackExpense',
    title,
    description,
    images,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} data-theme="light">
        {children}
      </body>

      <GoogleAnalytics gaId="G-SESJPYV2B6" />
    </html>
  );
}
