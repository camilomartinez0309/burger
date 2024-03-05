import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppLayout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burger ",
  description: "This is test for next.js typescript and SSR,CSR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " dark:bg-gray-800 transition-colors duration-300 ease-in"}>
        <AppLayout>
          {children}
        </AppLayout></body>
    </html>
  );
}
