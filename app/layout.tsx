import type { Metadata } from 'next';
import './globals.css';
import { Geist, Great_Vibes } from "next/font/google";
import { cn } from "@/lib/utils";
import { SEO_DEFAULTS } from '@/constants/seo-defaults';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const greatVibes = Great_Vibes({ weight: "400", subsets: ['latin'], variable: '--font-cursive' });

// Icons come from the app/icon.svg and app/apple-icon.tsx file conventions.
export const metadata: Metadata = {
  title: SEO_DEFAULTS.title,
  description: SEO_DEFAULTS.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, greatVibes.variable)} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
