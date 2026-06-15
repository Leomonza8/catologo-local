import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Catálogo Local",
  description: "Seu catálogo para produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <span className="text-xl font-bold">Catálogo Local</span>
          <span className="text-2xl">🛒</span>
        </header>
        {children}
      </body>
    </html>
  );
}
