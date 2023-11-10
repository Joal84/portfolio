import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Pinheiro Portfolio",
  description:
    "An adaptable web developer with a proven track record in both creative and technical domains.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Nav /> {children}
      </body>
    </html>
  );
}
