import FLY_WEIGHT from "../actions/actionTypes"
import { combineReducers } from "redux"
import authReducer from "./auth"

const initValue = "기본 체급"

export const weightClassReducer = (state = initValue, action) => {
	switch (action.type) {
		case FLY_WEIGHT:
			state = action.payload
			break
		default:
			state = "기본값"
	}

	return state
}

const rootReducer = combineReducers({
	weightClassReducer,
	authReducer
})

export default rootReducer
