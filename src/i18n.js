import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import ko from "assets/language/ko.js"
import en from "assets/language/en.js"

const resources = {
	ko,
	en
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: "ko",
		keySeparator: ".",
		interpolation: {
			escapeValue: false
		}
	})

export default i18n
