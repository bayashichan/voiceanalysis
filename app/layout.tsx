import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "声紋分析コーチング | 若林寛紀",
  description: "6秒の声から本音を可視化する声紋分析で、ずっと求めていた人生を掴むサポート",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="bg-stone-50">
      <body className={`${geist.className} antialiased text-stone-800`}>
        {children}
      </body>
    </html>
  );
}
