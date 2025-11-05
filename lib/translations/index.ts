import { en } from "./en"
import { ptBR } from "./pt-BR"
import { es } from "./es"
import type { Locale } from "../i18n"

export const translations = {
  en,
  "pt-BR": ptBR,
  es,
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
