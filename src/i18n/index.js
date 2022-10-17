import Vue from 'vue'
import { createI18n } from 'vue-i18n'
import czech from './czechLocale.json'
import english from './englishLocale.json'

const locale = 'cs'
const messages = { cs: czech, en: english}

const i18n = new createI18n({
  locale,
  fallbackLocale: 'en',
  messages
})

export default i18n