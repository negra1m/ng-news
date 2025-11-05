"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Heart, Github } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export function Community() {
  const { t } = useLocale()

  return (
    <section id="community" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t.community.titlePrefix} <span className="text-primary">{t.community.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.community.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <MessageSquare className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{t.community.discord.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.community.discord.description}</p>
            <Button variant="outline" className="w-full bg-transparent">
              {t.community.discord.button}
            </Button>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Github className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{t.community.github.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.community.github.description}</p>
            <Button variant="outline" className="w-full bg-transparent">
              {t.community.github.button}
            </Button>
          </Card>
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">{t.community.support.title}</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.community.support.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Heart className="h-5 w-5" />
                {t.community.support.become}
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Users className="h-5 w-5" />
                {t.community.support.contribute}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
