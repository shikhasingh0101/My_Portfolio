import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shikhasinghportfolio.vercel.app"),
  title: "Shikha Singh — Full-Stack Developer & ML Builder",
  description: "Portfolio of Shikha Singh — a computer science student building full-stack products, data-driven applications and machine learning solutions.",
  openGraph: {
    title: "Shikha Singh — Full-Stack Developer & ML Builder",
    description: "Code × Data × AI × Design",
    type: "website",
    url: "https://shikhasinghportfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikha Singh — Full-Stack Developer & ML Builder",
    description: "Code × Data × AI × Design",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
