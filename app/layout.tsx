import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import Navbar from "@/components/nav";
import { cn } from "@/lib/utils";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { GoogleAnalytics } from "@next/third-parties/google";

import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

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
          "bg-gradient-to-b from-primary/10 to-15% min-h-screen font-sans antialiased"
        )}
      >
        <AntdRegistry>
          <ClerkProvider>
            <Providers>
              <Navbar />
              {children}
              <Footer />
            </Providers>
          </ClerkProvider>
        </AntdRegistry>
      </body>
      <GoogleAnalytics gaId="G-GFR3J5RWGW" />
    </html>
  );
}
