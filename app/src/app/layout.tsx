import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Footer from "@/components/ui/Footer";
import HeaderClient from "@/components/ui/HeaderClient";
import AccessibilityControl from "@/components/ui/AccessibilityControl";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
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
    <html lang="fr" className={`${montserrat.variable}`}>
      <ClientBody>
        <a href="#main-content" className="skip-to-content">Aller au contenu principal</a>
        <HeaderClient />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <AccessibilityControl />
      </ClientBody>
    </html>
  );
}
