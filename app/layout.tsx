import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

// const inter = Inter({ subsets: ["latin"] });

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}