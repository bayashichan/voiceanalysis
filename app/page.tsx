"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* FV Section */}
      <section className="mx-auto max-w-2xl px-6 py-12 sm:py-20 md:py-28">
        {/* Main Message */}
        <div className="space-y-6 text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-stone-900">
            気づいたら、<br className="hidden sm:block" />
            なりたくない自分になっていた。
          </h1>
        </div>

        {/* User Empathy Section */}
        <div className="space-y-6 mb-14 md:mb-18">
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="text-lg pt-1 flex-shrink-0">—</div>
              <p className="text-base sm:text-lg font-semibold text-stone-800">
                いつか動こう、とずっと思っている。<br />
                なのに、いつまで同じ場所にいるんだろう。
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-lg pt-1 flex-shrink-0">—</div>
              <p className="text-base sm:text-lg font-semibold text-stone-800">
                悪くない毎日だ。<br />
                でも、これでいいんだろうか。
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-lg pt-1 flex-shrink-0">—</div>
              <p className="text-base sm:text-lg font-semibold text-stone-800">
                学んだ。本も読んだ。<br />
                それでも、何年も何も変わっていない。
              </p>
            </div>
          </div>
        </div>

        {/* Empathy Message */}
        <div className="mb-14 md:mb-20 text-center space-y-4">
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            その感覚、私にもありました。<br />
            何年も、ずっとそこにいた。<br />
            一人で抱え続けるのは、苦しすぎますよね。
          </p>
        </div>

        {/* Voice Analysis Graph */}
        <div className="mb-14 md:mb-20">
          <div className="aspect-square w-full max-w-sm mx-auto mb-4">
            <div className="w-full h-full bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-400">声紋分析グラフ</span>
            </div>
          </div>
          <p className="text-center text-sm text-stone-600">
            特許技術による声紋分析。<br />
            6秒の声が、このように可視化されます。
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-6 mb-16 md:mb-20">
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            私は、<span className="font-bold text-stone-900">救急救命士（国家資格）</span>として20年以上、生死の現場で<span className="font-bold text-stone-900">2,000名以上</span>と向き合ってきました。
          </p>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            今はその経験をもとに、6秒の声から本音を可視化する声紋分析を用いて、ずっと求めていた人生を掴むサポートをしています。
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16 md:mb-20">
          <Button
            className="w-full sm:w-80 h-14 bg-stone-800 hover:bg-stone-900 text-white text-base font-semibold rounded-lg transition-colors"
            onClick={() => {
              window.location.href = "#";
            }}
          >
            無料 公式LINE 友だち追加
          </Button>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-200 my-16 md:my-20"></div>

        {/* Results Section */}
        <div className="space-y-10 mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-stone-900 mb-10">
            こんな変化を感じた方がいます
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="text-lg pt-1 flex-shrink-0 text-stone-600">●</div>
              <p className="text-base sm:text-lg font-semibold text-stone-800">
                「無駄なことをしなくなった。<br />
                本当に必要なことだけに、集中できるようになった。」
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-lg pt-1 flex-shrink-0 text-stone-600">●</div>
              <p className="text-base sm:text-lg font-semibold text-stone-800">
                「ズレても、自分の基準で戻ってこれる。<br />
                迷子にならなくなった。」
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-lg pt-1 flex-shrink-0 text-stone-600">●</div>
              <p className="text-base sm:text-lg font-semibold text-stone-800">
                「去年の自分とは、全く違う結果が出始めている。<br />
                初めて、未来が楽しみになった。」
              </p>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center space-y-6 mb-12">
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            「やっと、自分の方向が見えた」<br />
            そう感じるきっかけを、このLINEで届けています。
          </p>
          <p className="text-base text-stone-600">
            登録は30秒です。
          </p>
        </div>

        {/* CTA Button 2 */}
        <div className="flex justify-center">
          <Button
            className="w-full sm:w-80 h-14 bg-stone-800 hover:bg-stone-900 text-white text-base font-semibold rounded-lg transition-colors"
            onClick={() => {
              window.location.href = "#";
            }}
          >
            無料 公式LINE 友だち追加
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-stone-200 text-center text-xs sm:text-sm text-stone-600 space-y-2">
          <p>© 2026 若林 / 声紋分析コーチ</p>
          <p>
            声紋分析技術：柊木匠氏 / 株式会社ライフスタイルマネジメント
          </p>
        </div>
      </section>
    </main>
  );
}
