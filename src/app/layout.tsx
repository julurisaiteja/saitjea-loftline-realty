import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
const heading = DM_Serif_Display({ subsets: ["latin"], variable: "--font-dm-serif", weight: ["400"] });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["400","500","700"] });
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = { title: "Loftline Realty", description: "Demo storefront" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="architectural-minimal">
      <body className={`${heading.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            {children}
            <Footer />
            <AiAssistant />
            <StickyMobileCta primaryHref="/tour" primaryLabel="Start property tour" />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
