import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import "./GMIcons.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Williams, UI/UX Software Engineer",
  description: "Designed for Tailwind Lab's Design Engineer position.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}