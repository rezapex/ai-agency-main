import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Automate SMB",
  description:
    "At AutomateSMB, we're revolutionizing how small and medium-sized businesses harness the power of artificial intelligence. Our approach is simple: we take your data, your challenges, and your goals, then create AI models tailored specifically to your needs. No off-the-shelf solutions here - just powerful, private AI that speaks your business language.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
