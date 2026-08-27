import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Katie Kanaan",
  description:
    "Katie Kanaan — medical student at the University of Iowa Carver College of Medicine, MD Class of 2029.",
};

export const viewport: Viewport = {
  themeColor: "#4274D9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        ibmPlexSans.variable,
        playfairDisplay.variable,
      )}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
