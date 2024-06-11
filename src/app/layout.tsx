import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Stealth Design Assignment",
  description: "UI part",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="!font-hoves">{children}</body>
    </html>
  );
}

