import { Cantata_One } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";

const cantatone = Cantata_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "TP Clone - Vishal Padhariya",
  description: "Watch Live tv clone by vishal padhariya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cantatone.className}>
        <main className="min-h-screen text-center bg-slate-400 text-[#243c5a] font-medium antialiased tracking-wide leading-relaxed text-xl p-4">
          {children}
          <FloatingCTA />
        </main>
      </body>
    </html>
  );
}
