import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shikhasinghportfolio.vercel.app"),

  title: "Shikha Singh — Full-Stack Developer & ML Builder",

  description:
    "Portfolio of Shikha Singh — a computer science student building full-stack products, data-driven applications and machine learning solutions.",

  openGraph: {
    title: "Shikha Singh — Full-Stack Developer & ML Builder",

    description: "Code × Data × AI × Design",

    type: "website",

    url: "https://shikhasinghportfolio.vercel.app",

    siteName: "Shikha Singh Portfolio",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shikha Singh — Full-Stack Developer & ML Builder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Shikha Singh — Full-Stack Developer & ML Builder",

    description: "Code × Data × AI × Design",

    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}