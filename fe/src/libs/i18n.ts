import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import English from '@assets/languages/en.json'
import Vietnamese from '@assets/languages/vi.json'

i18n.use(initReactI18next).init({
  lng: 'vi',
  resources: {
    vi: { translation: Vietnamese },
    en: { translation: English }
  },
  react: {
    useSuspense: false
  },
  compatibilityJSON: 'v3'
})


export default i18n