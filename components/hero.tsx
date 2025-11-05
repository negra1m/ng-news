"use client"

import { Button } from "@/components/ui/button"
import { Play, Users } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import Image from "next/image"

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image src="/ng-news-logo.png" alt="ng-news logo" width={120} height={120} className="object-contain" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">3.46k {t.hero.badge}</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
            {t.hero.title.split("Angular")[0]}
            <span className="text-primary">Angular</span>
            {t.hero.title.split("Angular")[1]}
          </h1>

          <p className="text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 text-base px-8">
              <Play className="h-5 w-5" />
              {t.hero.watchNow}
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 bg-transparent">
              <Users className="h-5 w-5" />
              {t.hero.community}
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">248</div>
              <div className="text-sm text-muted-foreground">{t.hero.stats.videos}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100k+</div>
              <div className="text-sm text-muted-foreground">{t.hero.stats.views}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3.46k</div>
              <div className="text-sm text-muted-foreground">{t.hero.stats.subscribers}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
