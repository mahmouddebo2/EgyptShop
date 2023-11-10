import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModel from "./components/ShoppingCartModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EgyptShop",
  description: "We sell only the most exclusive and high quality prodicts for you, We are best so come and shop with us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModel/>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
