import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

const title = 'TrackExpense - A to-do list app for your monthly expenses';
const description =
  'Simplify your budgeting with TrackExpense. Just like your favorite to-do list, but for your bills';

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
