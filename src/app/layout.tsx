import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: "Dynamic_routing_countries",
  description: "Created By Haider Hussain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-black"
      >
      <Analytics/>
        {children}
      </body>
    </html>
  );
}
