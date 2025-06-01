import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Monk Commerce",
  description:
    "Full suite AOV enhancement app for Shopify stores with highly customizable designs & a comprehensive eligibility engine",
  openGraph: {
    type: "website",
    url: "https://monkcommerce.com/",
    title: "Monk Commerce",
    description:
      "Full suite AOV enhancement app for Shopify stores with highly customizable designs & a comprehensive eligibility engine",
    images: [
      {
        url: "https://metatags.io/images/meta-tags.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@monkcommerce",
    title: "Monk Commerce",
    description:
      "Full suite AOV enhancement app for Shopify stores with highly customizable designs & a comprehensive eligibility engine",
    images: ["https://metatags.io/images/meta-tags.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
