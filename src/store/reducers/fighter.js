import { GET_TARGET_FIGHTERS, SET_FIGHTERS } from "../actions/fighter"

const initValue = {
	fighters: []
}

const fighterReducer = (state = initValue, action) => {
	switch (action.type) {
		case SET_FIGHTERS:
			return (state = {
				...state,
				fighters: action.value
			})
		case GET_TARGET_FIGHTERS:
			const filteringState = state.fighters.filter(fighter => {
				return fighter[action.criteria] === [action.value]
			})
			return (state = {
				...state,
				fighters: filteringState
			})

		default:
			return state
	}
}

export default fighterReducer
