"use client"

import { Card } from "@/components/ui/card"
import { Clock, Globe, Zap, BookOpen } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export function About() {
  const { t } = useLocale()

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t.about.title.split("ng-news")[0]}
            <span className="text-primary">ng-news</span>
            {t.about.title.split("ng-news")[1]}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.about.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.about.features.fast.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.about.features.fast.description}</p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.about.features.multilingual.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.about.features.multilingual.description}</p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.about.features.weekly.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.about.features.weekly.description}</p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.about.features.educational.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.about.features.educational.description}</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
