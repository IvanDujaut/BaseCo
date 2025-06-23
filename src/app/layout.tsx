import "./globals.css";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "../providers/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BaseCo",
  description: "Enjoy the best way to invest in the real estate market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
