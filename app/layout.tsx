import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/components/layout/Footer";
import { FloatingThemeToggle } from "@/components/theme/theme-toggle";
import localFont from "next/font/local";
import CookieBanner from "@/components/CookieBanner";
import { createMetadata } from "@/lib/seo";

// font configuration
const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export const metadata = createMetadata({
  title: "TopTeam Logistics",
  description:
    "Flexible last-mile delivery and logistics services supporting businesses, partners, and growing operations across the UK.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={satoshi.variable}>
      <body className="transition-colors duration-300 font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <main className="flex-1">{children}</main>
            <FloatingThemeToggle />
            <Footer />
            <CookieBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
