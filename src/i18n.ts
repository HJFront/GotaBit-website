import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import index from '../locales/en/index.json'
import footer from '../locales/en/footer.json'
import nav from '../locales/en/nav.json'
import common from '../locales/en/common.json'
import dapp from '../locales/en/dapp.json'

import nav_zh from '../locales/zh/nav.json'
import footer_zh from '../locales/zh/footer.json'
import index_zh from '../locales/zh/index.json'
import common_zh from '../locales/zh/common.json'
import dapp_zh from '../locales/zh/dapp.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
    ns: ['index', 'common'],
    react: {
      useSuspense: false,
    },
  })

// preload
i18n.addResourceBundle('en', 'index', index)
i18n.addResourceBundle('en', 'common', common)
i18n.addResourceBundle('en', 'dapp', dapp)
i18n.addResourceBundle('en', 'nav', nav)
i18n.addResourceBundle('en', 'footer', footer)

i18n.addResourceBundle('zh', 'index', index_zh)
i18n.addResourceBundle('zh', 'common', common_zh)
i18n.addResourceBundle('zh', 'dapp', dapp_zh)
i18n.addResourceBundle('zh', 'nav', nav_zh)
i18n.addResourceBundle('zh', 'footer', footer_zh)

export default i18n
