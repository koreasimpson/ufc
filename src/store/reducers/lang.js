import { SET_LANGUAGE_KO, SET_LANGUAGE_EN, SET_LANGUAGE_JA } from "../actions/lang.js"

const initValue = {
	lang: navigator.language.slice(0, 2)
}

const langReducer = (state = initValue, action) => {
	switch (action.type) {
		case SET_LANGUAGE_KO:
			console.log("reducer action ko")
			return (state = {
				...state,
				lang: "ko"
			})

		case SET_LANGUAGE_EN:
			console.log("reducer action en")
			return (state = {
				...state,
				lang: "en"
			})

		case SET_LANGUAGE_JA:
			console.log("reducer action ja")
			return (state = {
				...state,
				lang: "ja"
			})

		default:
			return state
	}
}

export default langReducer
