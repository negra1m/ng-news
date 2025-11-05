"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Menu, Globe } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { locales, localeNames, type Locale } from "@/lib/i18n"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Header() {
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/ng-news-logo.png"
                alt="ng-news logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xl font-bold">ng-news</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.about}
            </Link>
            <Link href="#videos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.videos}
            </Link>
            <Link href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.community}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {localeNames[locale]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((loc) => (
                  <DropdownMenuItem key={loc} onClick={() => setLocale(loc as Locale)}>
                    {localeNames[loc]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild variant="default" size="sm" className="gap-2">
              <a href="https://youtube.com/@ng-news" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
                {t.header.youtube}
              </a>
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
