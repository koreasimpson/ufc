import { ACCESS_LOGIN, ACCESS_LOGOUT } from "../actions/auth.js"

if (window.localStorage.getItem("nzcUfcAuth")) {
	const { expireTime } = JSON.parse(window.localStorage.getItem("nzcUfcAuth"))
	const now = new Date().getTime()
	if (now > expireTime) window.localStorage.removeItem("nzcUfcAuth")
}

const initValue = {
	isAuth: !!window.localStorage.getItem("nzcUfcAuth")
}

const authReducer = (state = initValue, action) => {
	switch (action.type) {
		case ACCESS_LOGIN:
			return (state = {
				...state,
				isAuth: true
			})
		case ACCESS_LOGOUT:
			window.localStorage.removeItem("nzcUfcAuth")
			return (state = {
				...state,
				isAuth: false
			})
		default: {
			return state
		}
	}
}

export default authReducer
