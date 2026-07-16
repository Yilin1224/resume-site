import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yilin Dai — Portfolio & Professional Chronicle",
  description: "The portfolio and professional chronicle of Yilin Dai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
