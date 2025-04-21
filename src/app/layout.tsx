import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Footer from "@/components/ui/Footer";
import HeaderClient from "@/components/ui/HeaderClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyriel Services | Solutions informatiques sur mesure",
  description:
    "Kyriel Services crée des solutions d'automatisation innovantes qui révolutionnent vos opérations et font gagner du temps à votre entreprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        <HeaderClient />
        <main>{children}</main>
        <Footer />
      </ClientBody>
    </html>
  );
}
