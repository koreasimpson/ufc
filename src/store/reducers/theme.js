import { SET_THEME_LIGHT, SET_THEME_DARK } from "../actions/theme"

const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: Dark)").matches

const initValue = {
	theme: prefersDark ? "dark" : "light"
}

const themeReducer = (state = initValue, action) => {
	switch (action.type) {
		case SET_THEME_LIGHT:
			return (state = {
				...state,
				theme: "light"
			})
		case SET_THEME_DARK:
			return (state = {
				...state,
				theme: "dark"
			})
		default:
			return state
	}
}

export default themeReducer
