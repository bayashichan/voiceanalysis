"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* FV Section - ポスター的な構成 */}
      <section className="mx-auto max-w-xl px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        {/* Main Visual Message */}
        <div className="text-center mb-20 sm:mb-28 md:mb-36">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-loose tracking-wide text-stone-800">
            気づいたら、
            <br />
            なりたくない自分に
            <br />
            なっていた。
          </h1>
        </div>

        {/* Quiet Reflection */}
        <div className="space-y-8 sm:space-y-10 mb-20 sm:mb-28">
          <p className="text-base sm:text-lg text-stone-600 leading-loose tracking-wide">
            いつか動こう、とずっと思っている。
            <br />
            なのに、いつまで同じ場所にいるんだろう。
          </p>

          <p className="text-base sm:text-lg text-stone-600 leading-loose tracking-wide">
            悪くない毎日だ。
            <br />
            でも、これでいいんだろうか。
          </p>

          <p className="text-base sm:text-lg text-stone-600 leading-loose tracking-wide">
            学んだ。本も読んだ。
            <br />
            それでも、何年も何も変わっていない。
          </p>
        </div>

        {/* Empathy - 寄り添いの言葉 */}
        <div className="mb-24 sm:mb-32">
          <p className="text-base sm:text-lg text-stone-700 leading-loose tracking-wide">
            その感覚、私にもありました。
            <br />
            何年も、ずっとそこにいた。
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="mx-auto max-w-xl px-8 py-16 sm:py-24">
        {/* Voice Analysis */}
        <div className="mb-20 sm:mb-28">
          <div className="aspect-square w-full max-w-xs mx-auto mb-8">
            <div className="w-full h-full bg-stone-100 border border-stone-200 flex items-center justify-center">
              <span className="text-stone-400 text-sm">声紋分析グラフ</span>
            </div>
          </div>
          <p className="text-center text-sm text-stone-500 leading-relaxed">
            6秒の声が、このように可視化されます。
          </p>
        </div>

        {/* About */}
        <div className="space-y-8 mb-20 sm:mb-28">
          <p className="text-base text-stone-600 leading-loose tracking-wide">
            私は救急救命士として20年以上、
            <br />
            生死の現場で2,000名以上と向き合ってきました。
          </p>

          <p className="text-base text-stone-600 leading-loose tracking-wide">
            今はその経験をもとに、
            <br />
            6秒の声から本音を可視化する声紋分析で、
            <br />
            ずっと求めていた人生を掴むサポートをしています。
          </p>
        </div>

        {/* CTA - 控えめに */}
        <div className="flex justify-center mb-24 sm:mb-32">
          <Button
            variant="outline"
            className="w-full sm:w-72 h-12 border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-800 text-sm font-normal tracking-wide transition-colors"
            onClick={() => {
              window.location.href = "#";
            }}
          >
            公式LINEで詳しく見る
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-xl px-8 py-16 sm:py-24 border-t border-stone-200">
        <h2 className="text-lg sm:text-xl font-medium text-center text-stone-700 mb-16 sm:mb-20 tracking-wide">
          変化を感じた方の声
        </h2>

        <div className="space-y-12 sm:space-y-16 mb-20 sm:mb-28">
          <blockquote className="text-base text-stone-600 leading-loose tracking-wide">
            無駄なことをしなくなった。
            <br />
            本当に必要なことだけに、集中できるようになった。
          </blockquote>

          <blockquote className="text-base text-stone-600 leading-loose tracking-wide">
            ズレても、自分の基準で戻ってこれる。
            <br />
            迷子にならなくなった。
          </blockquote>

          <blockquote className="text-base text-stone-600 leading-loose tracking-wide">
            去年の自分とは、全く違う結果が出始めている。
            <br />
            初めて、未来が楽しみになった。
          </blockquote>
        </div>
      </section>

      {/* Closing Section */}
      <section className="mx-auto max-w-xl px-8 py-16 sm:py-24 border-t border-stone-200">
        <div className="text-center space-y-8 mb-16 sm:mb-20">
          <p className="text-base text-stone-600 leading-loose tracking-wide">
            「やっと、自分の方向が見えた」
            <br />
            そう感じるきっかけを、LINEで届けています。
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="w-full sm:w-72 h-12 border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-800 text-sm font-normal tracking-wide transition-colors"
            onClick={() => {
              window.location.href = "#";
            }}
          >
            公式LINEで詳しく見る
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-24 sm:mt-32 text-center text-xs text-stone-400 space-y-1">
          <p>若林寛紀 / 声紋分析コーチ</p>
          <p>声紋分析技術：柊木匠氏 / 株式会社ライフスタイルマネジメント</p>
        </div>
      </section>
    </main>
  );
}
