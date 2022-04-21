import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { translationEn } from './languages'

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: translationEn,
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: { 
            escapeValue: false 
        },
    })
