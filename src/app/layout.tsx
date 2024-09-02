import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

const title = 'Trackexpense - A to-do list app for your monthly expenses';
const description =
  'Simplify your budgeting with Trackexpense. Just like your favorite to-do list, but for your bills';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trackexpense.app',
    siteName: 'Trackexpense',
    title,
    description,
    images: [
      {
        url: 'https://trackexpense.app/woman-managing-her-personal-finances.png',
        width: 368,
        height: 207,
        alt: 'Trackexpense',
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
    </html>
  );
}
