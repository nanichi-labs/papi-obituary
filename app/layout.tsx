import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "In Memory of Angel Centeno",
  description: "Loving Husband & Father",
  openGraph: {
    images: [
      {
        url: 'https://papiobituary.s3.us-east-1.amazonaws.com/og-papi.jpg'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
