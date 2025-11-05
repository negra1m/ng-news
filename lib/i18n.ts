export type Locale = "en" | "pt-BR" | "es"

export const defaultLocale: Locale = "en"

export const locales: Locale[] = ["en", "pt-BR", "es"]

export const localeNames: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português",
  es: "Español",
}
