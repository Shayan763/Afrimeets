import type { Metadata } from "next";
import { Outfit as OutfitFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  weight: ["200", "500", "700"],
  variable: "--outfit",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Affrimeets Dating",
  description: "Affrimeets Dating",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
