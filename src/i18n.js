import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import ko from "assets/language/ko.js"
import en from "assets/language/en.js"
import { getCookie } from "assets/lib/cookie"

const langCookieValue = getCookie("nzcUfcLang")
const navigatorLang = navigator.language.slice(0, 2)

const initLang = langCookieValue ? langCookieValue : navigatorLang

const resources = {
	ko,
	en
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: initLang,
		keySeparator: ".",
		interpolation: {
			escapeValue: false
		}
	})

export default i18n
