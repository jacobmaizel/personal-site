import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@styles/globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme/theme-provider';
import RootHeader from '@/components/header/root-header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Favicon from 'public/favicon.ico';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Jacob Maizel',
  description: 'Jacob Maizel is a software engineer based in New York City.',
  icons: [{ rel: 'icon', url: Favicon.src }],
  openGraph: {
    title: "Jacob Maizel's Personal Website",
    description:
      'Jacob Maizel is a software engineer based in New York City. Come check out his projects, blogs and more.',
    images: {
      url: '/apple-touch-icon.png',
    },
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
};
export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Jacob maizel</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased dar',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootHeader />
          <div className="flex m-2 md:mx-32 md:mt-16">
            {children}
            <Analytics />
            {/* <SpeedInsights /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
