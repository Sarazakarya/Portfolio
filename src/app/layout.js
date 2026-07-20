import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/providers";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop ";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "My Portfolil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full`}>
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <Providers>{children}</Providers>
        <Toaster position="top-center" richColors />
        <ScrollToTop/>
      </body>
    </html>
  );
}
