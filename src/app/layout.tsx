import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Montserrat, Hind } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/auth-provider";
import { Providers } from "./providers";
import CustomCursor from "@/components/mppl/CustomCursor";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800", "900"],
  display: "swap",
});

const hind = Hind({
  subsets: ["devanagari", "latin"],
  variable: "--font-hind",
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MPPL",
  description:
    "India's most serious regional pickleball league. India's Heart. The Court's Soul. 8 teams fight for one crown.",
  keywords: [
    "MPPL",
    "Pickleball",
    "Sports",
    "India",
  ],
  openGraph: {
    title: "MPPL",
    description: "India's Heart. The Court's Soul.",
    type: "website",
  },
  icons: {
    icon: "/images/logo-transparent.png",
    shortcut: "/images/logo-transparent.png",
    apple: "/images/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${bebas.variable} ${dmSans.variable} ${montserrat.variable} ${hind.variable} font-sans bg-deep-court text-net-white section-noise`}>
        <CustomCursor />
        <Providers>
          <AuthProvider>{children}</AuthProvider>
        </Providers>
      </body>
    </html>
  );
}