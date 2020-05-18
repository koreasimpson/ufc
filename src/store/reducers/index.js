import { combineReducers } from "redux"
import weightClassReducer from "./weightClass"
import authReducer from "./auth"
import langReducer from "./lang"

const rootReducer = combineReducers({
	weightClassReducer,
	authReducer,
	langReducer
})

export default rootReducer
