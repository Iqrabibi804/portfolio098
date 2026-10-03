import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SystemStatusUI } from "@/components/ui/SystemStatusUI";
import { PageTransition } from "@/components/ui/PageTransition";
import { GlobalStateProvider } from "@/components/providers/GlobalStateProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Iqra Bibi — Flutter Developer · Web Developer · Software Engineering Student",
  description: "Iqra Bibi is a software engineering student and developer building Flutter applications, web platforms, full-stack systems and AI-integrated software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <SmoothScroll>
          <GlobalStateProvider>
            <CustomCursor />
            <SystemStatusUI />
            <PageTransition />
            <Navigation />
            {children}
            <Footer />
          </GlobalStateProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
