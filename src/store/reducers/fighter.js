import { SET_TARGET_FIGHTERS, SET_ALL_FIGHTERS } from "../actions/fighter"

const initValue = {
	fighters: [],
	target: []
}

const fighterReducer = (state = initValue, action) => {
	switch (action.type) {
		case SET_ALL_FIGHTERS:
			return (state = {
				...state,
				fighters: action.value
			})
		case SET_TARGET_FIGHTERS:
			return (state = {
				...state,
				target: action.value
			})
		default:
			return state
	}
}

export default fighterReducer
