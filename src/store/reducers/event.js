import { SET_ALL_EVENTS } from "../actions/event.js"

const initValue = {
	events: []
}

const eventReducer = (state = initValue, action) => {
	switch (action.type) {
		case SET_ALL_EVENTS:
			return (state = {
				...state,
				events: action.value
			})
		default:
			return state
	}
}

export default eventReducer
