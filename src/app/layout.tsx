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

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trackexpense.app',
    siteName: 'TrackExpense',
    title,
    description,
    images: [
      {
        url: 'https://trackexpense.app/trackexpense.png',
        width: 368,
        height: 207,
        alt: 'TrackExpense',
      },
    ],
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
