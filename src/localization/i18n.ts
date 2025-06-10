
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en.json"
import de from "./de.json"
import fr from "./fr.json"

const LANGUAGES = {
    en :{
        translation: en
    },
    fr:{
        translation: fr
    },
    de:{
        translation: de
    }
}

i18n.use(initReactI18next).init({
    resources: LANGUAGES,
    fallbackLng: "fr",
    defaultNS: "translation",
    ns: ["translation"],
    react:{
        useSuspense: false
    },
    interpolation: {
        escapeValue: false 
    }
})

export default i18n