import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import LeftSideBar from "@/components/ui/LeftSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Meu Portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:flex md:flex-1">
          <LeftSideBar />
          <div className="flex flex-col h-full">
            <Header />
            <section className="flex-1">{children}</section>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
