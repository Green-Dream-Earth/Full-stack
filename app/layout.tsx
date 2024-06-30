import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/nav";
import { Footer } from "@/components/footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "helpstudyabroad",
  description: "We curate your study abroad experience!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gradient-to-b from-primary/10 to-15% min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClerkProvider>
          <Providers>
            <AntdRegistry>
              <Navbar />
              {children}
              <Footer />
            </AntdRegistry>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
