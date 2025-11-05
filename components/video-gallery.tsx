"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

/**
 * Creating some models but needs definitions with the team yet
 */
const videos = [
  // ng-news (English)
  {
    id: 1,
    title: "Ng-News 25/43: Vitest - Angular's New Testing Framework",
    category: "ng-news",
    language: "en",
    duration: "3:05",
    views: "1.8k",
    videoId: "tKulEWNnI1s",
    url: "https://www.youtube.com/watch?v=tKulEWNnI1s",
    thumbnail: `https://img.youtube.com/vi/tKulEWNnI1s/maxresdefault.jpg`,
  },
  {
    id: 2,
    title: "Ng-News 25/42: Ng-Conf Keynote, Community Content",
    category: "ng-news",
    language: "en",
    duration: "3:12",
    views: "800",
    videoId: "6y0O-X0ayos",
    url: "https://www.youtube.com/watch?v=6y0O-X0ayos",
    thumbnail: `https://img.youtube.com/vi/6y0O-X0ayos/maxresdefault.jpg`,
  },
  {
    id: 3,
    title: "Ng-News 25/41: Future Testing Framework - Vitest or Jest?",
    category: "ng-news",
    language: "en",
    duration: "3:07",
    views: "1.7k",
    videoId: "ILO3qUvY96s",
    url: "https://www.youtube.com/watch?v=ILO3qUvY96s",
    thumbnail: `https://img.youtube.com/vi/ILO3qUvY96s/maxresdefault.jpg`,
  },
  {
    id: 4,
    title: "Ng-News 25/40: Angular Signals Complete Tutorial",
    category: "ng-news",
    language: "en",
    duration: "15:42",
    views: "5.2k",
    videoId: "zSb2gsVJC-M",
    url: "https://www.youtube.com/watch?v=zSb2gsVJC-M",
    thumbnail: `https://img.youtube.com/vi/zSb2gsVJC-M/maxresdefault.jpg`,
  },
  // ng-news BR (Portuguese)
  {
    id: 5,
    title: "Ng-News BR: Novidades do Angular",
    category: "ng-news-br",
    language: "pt-BR",
    duration: "1:42",
    views: "2.1k",
    videoId: "IjyA1Thl5hY",
    url: "https://www.youtube.com/watch?v=IjyA1Thl5hY",
    thumbnail: `https://img.youtube.com/vi/IjyA1Thl5hY/maxresdefault.jpg`,
  },
  {
    id: 6,
    title: "Ng-News BR: Atualizações da Comunidade Angular",
    category: "ng-news-br",
    language: "pt-BR",
    duration: "1:38",
    views: "1.9k",
    videoId: "Wb9LIbbQyx0",
    url: "https://www.youtube.com/watch?v=Wb9LIbbQyx0",
    thumbnail: `https://img.youtube.com/vi/Wb9LIbbQyx0/maxresdefault.jpg`,
  },
  {
    id: 7,
    title: "Ng-News BR: Framework de Testes e Mais",
    category: "ng-news-br",
    language: "pt-BR",
    duration: "1:45",
    views: "1.5k",
    videoId: "pJrpsdgELMI",
    url: "https://www.youtube.com/watch?v=pJrpsdgELMI",
    thumbnail: `https://img.youtube.com/vi/pJrpsdgELMI/maxresdefault.jpg`,
  },
  // ng-news ES (Spanish)
  {
    id: 8,
    title: "Ng-News ES: Novedades de Angular",
    category: "ng-news-es",
    language: "es",
    duration: "1:40",
    views: "1.3k",
    videoId: "2eWQD6ypoJI",
    url: "https://www.youtube.com/watch?v=2eWQD6ypoJI",
    thumbnail: `https://img.youtube.com/vi/2eWQD6ypoJI/maxresdefault.jpg`,
  },
  {
    id: 9,
    title: "Ng-News ES: Actualizaciones de la Comunidad",
    category: "ng-news-es",
    language: "es",
    duration: "1:35",
    views: "1.1k",
    videoId: "CtH8lcOYv74",
    url: "https://www.youtube.com/watch?v=CtH8lcOYv74",
    thumbnail: `https://img.youtube.com/vi/CtH8lcOYv74/maxresdefault.jpg`,
  },
]

export function VideoGallery() {
  const { t } = useLocale()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: t.videos.categories.all },
    { id: "ng-news", label: t.videos.categories.ngNews },
    { id: "ng-news-br", label: t.videos.categories.ngNewsBR },
    { id: "ng-news-es", label: t.videos.categories.ngNewsES },
    { id: "tutorials", label: t.videos.categories.tutorials },
    { id: "courses", label: t.videos.categories.courses },
    { id: "lives", label: t.videos.categories.lives },
  ]

  const filteredVideos = activeCategory === "all" ? videos : videos.filter((video) => video.category === activeCategory)

  return (
    <section id="videos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t.videos.titlePrefix} <span className="text-primary">{t.videos.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.videos.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer h-full">
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs font-medium flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.views} {t.videos.views}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="https://youtube.com/@ng-news" target="_blank" rel="noopener noreferrer">
              {t.videos.viewAll}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
