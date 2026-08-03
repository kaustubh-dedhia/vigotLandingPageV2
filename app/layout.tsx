import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";

export const metadata: Metadata = {
  title: "VIGOT | Printz & Pack LLP — Premium Packaging Solutions",
  description:
    "Complete packaging solutions for products designed to be remembered. Rigid boxes, chocolate packaging, hampers, paper bags, beauty boxes and custom manufacturing.",
  openGraph: {
    title: "VIGOT | Printz & Pack LLP",
    description: "Premium custom packaging solutions for products designed to be remembered.",
    url: "https://vigot.in",
    siteName: "VIGOT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIGOT | Printz & Pack LLP",
    description: "Premium custom packaging solutions for products designed to be remembered.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
