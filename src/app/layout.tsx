import "./globals.css";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ReactNode } from "react";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

// Add this new viewport export
export const viewport = {
  themeColor: "#1b2632",
};

export const metadata = {
  title: "KR Law Group | Kathy Rabii Law Firm",

  description:
    "KR Law Group provides expert legal representation. Behind every case is a person who deserves care.",
  keywords:
    "personal injury lawyer, auto accident attorney, Los Angeles attorney, KR Law Group, car accident lawyer, premises liability, wrongful death",

  // Favicon and icon configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  // Web manifest
  manifest: "/site.webmanifest",

  // Open Graph / social sharing
  openGraph: {
    title: "KR Law Group | Personal Injury Attorneys",
    description:
      "KR Law Group provides expert legal representation in personal injury cases including auto accidents, premises liability, and wrongful death.",
    url: "https://www.krinjurylawfirm.com/",
    siteName: "KR Law Group",
    images: [
      {
        url: "/images/kr-law-og-image.png",
        width: 1200,
        height: 630,
        alt: "KR Law Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "KR Law Group | Personal Injury Attorneys",
    description:
      "KR Law Group provides expert legal representation in personal injury cases including auto accidents, premises liability, and wrongful death.",
    images: ["/images/kr-law-og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body suppressHydrationWarning={true} className={poppins.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
