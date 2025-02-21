import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <title>Amogh Chavan Portfolio</title>
        <link rel="icon" href="https://img.icons8.com/?size=100&id=43988&format=png&color=000000" type="image/x-con" />
      </head>
      <body className={inter.className}>
        <Analytics />
        {children}</body>
    </html>
  );
}
