import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased text-stone-800" style={{ fontFamily: '"ヒラギノ明朝 ProN", "Hiragino Mincho ProN", "游明朝", "Yu Mincho", serif' }}>
        {children}
      </body>
    </html>
  );
}
