import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daniel Lim | Software Engineer",
  description:
    "Portfolio website of Daniel Lim - Software Engineer, UC Berkeley CS graduate. Experience in iOS development, security tools, and full-stack engineering.",
  keywords: [
    "Daniel Lim",
    "Software Engineer",
    "UC Berkeley",
    "Portfolio",
    "iOS Developer",
    "Full Stack",
  ],
  openGraph: {
    title: "Daniel Lim | Software Engineer",
    description:
      "Portfolio website of Daniel Lim - Software Engineer, UC Berkeley CS graduate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
