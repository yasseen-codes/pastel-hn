import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const InterSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
const LibreBaskervilleSerif = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const IBMPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${InterSans.variable} ${LibreBaskervilleSerif.variable} ${IBMPlexMono.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
