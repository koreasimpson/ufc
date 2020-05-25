import { combineReducers } from "redux"
import weightClassReducer from "./weightClass"
import authReducer from "./auth"
import langReducer from "./lang"
import themeReducer from "./theme"

const rootReducer = combineReducers({
	weightClassReducer,
	authReducer,
	langReducer,
	themeReducer
})

export default rootReducer
