import { ACCESS_LOGIN, ACCESS_LOGOUT } from "../actions/auth.js"

const initValue = {
	isAuth: false
}

const authReducer = (state = initValue, action) => {
	switch (action.type) {
		case ACCESS_LOGIN:
			return (state = {
				...state,
				isAuth: true
			})
		case ACCESS_LOGOUT:
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
