import type { Metadata } from "next";
import { Sora, Syne } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { RevealRoot } from "@/components/RevealRoot";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UKSEV LTD",
    template: "%s — UKSEV",
  },
  description:
    "UKSEV LTD — electric bikes from Steventon Storage Facility, Abingdon. Local stock, guide prices, enquire to confirm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full bg-ground font-ui text-ink">
        <RevealRoot />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
