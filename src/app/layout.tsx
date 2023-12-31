import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "João Pinheiro Frontend Developer Portfolio",
    description:
      "An adaptable frontend developer with a proven track record in both creative and technical domains.",
    url: "https://www.joaop.info/",
    siteName: "Joao P. Jr. Frontend Developer",
    images: [
      {
        url: "https://1drv.ms/i/s!Ai-njtIr98M2gscbMQhF8cEZOXGQEg?e=axB9uj",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: "João Pinheiro Frontend Developer Portfolio",
  description:
    "An adaptable frontend developer with a proven track record in both creative and technical domains.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
