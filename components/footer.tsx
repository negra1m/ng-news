"use client"

import Link from "next/link"
import { Youtube, Twitter, Github, Mail, Heart } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e91e63" />
                      <stop offset="100%" stopColor="#d81b60" />
                    </linearGradient>
                  </defs>
                  <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="url(#footer-logo-gradient)" />
                  <text
                    x="50"
                    y="60"
                    textAnchor="middle"
                    fill="white"
                    fontSize="28"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    NEWS
                  </text>
                </svg>
              </div>
              <span className="text-xl font-bold">ng-news</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.links.about}
                </Link>
              </li>
              <li>
                <Link href="#videos" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.links.videos}
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.links.community}
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com/@ng-news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.links.youtube}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.social}</h4>
            <div className="flex gap-3">
              <a
                href="https://youtube.com/@ng-news"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ng-news. {t.footer.rights}
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            {t.footer.madeWith} <Heart className="h-4 w-4 text-primary fill-primary" />{" "}
            <a
              href="https://www.fewcompany.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              few company
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
