import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/components/layout/Footer";
import { FloatingThemeToggle } from "@/components/theme/theme-toggle";
import localFont from "next/font/local";

// font configuration
const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "TopTeam Logistics | Scalable Delivery & Fulfillment",
  description:
    "Scalable, reliable delivery and logistics solutions designed to support growing businesses and complex operations.",
};

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
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
