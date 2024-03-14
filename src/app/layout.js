import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JoshFolio",
  description: "Showcase of projects made by Joshua Lee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
};
