import "./globals.css";
import { artin, iranSans, iranYekan } from "../font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { icons } from "lucide-react";

export const metadata = {
  title: "rizza portfolio",
  description: "طراح سایت لوکس و مدرن",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="FA-IR" dir="rtl">
      <body
        className={`${artin.className} bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
