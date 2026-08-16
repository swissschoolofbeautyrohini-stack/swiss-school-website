import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Swiss School of Beauty Rohini',
  description: 'Landing page for Swiss School of Beauty courses in Rohini.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#1a1a1a] text-white`} suppressHydrationWarning>
        
        {/* Google Ads Tracking Code */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18214496526"
          strategy="afterInteractive"
        />
        <Script 
          id="google-ads-tag" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag; 
              gtag('js', new Date());
              gtag('config', 'AW-18214496526');
            `
          }} 
        />

        {children}
      </body>
    </html>
  );
}