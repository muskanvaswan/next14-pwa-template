import "./globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const murmure = localFont({ src: '../../fonts/le-murmure.ttf' })

export const metadata: Metadata = {
  title: "App",
  description: "Discover the Hindu Religion with modern technology",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Muskan Vaswan" },
    {
      name: "Muskan Vaswan",
      url: "https://portfolio-muskanvaswan.vercel.app/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "brand-icons/icon-512x512.png" },
    { rel: "icon", url: "brand-icons/icon-512x512.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={murmure.className}>{children}</body>
    </html>
  );
}