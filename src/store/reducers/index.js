import { combineReducers } from "redux"
import weightClassReducer from "./weightClass"
import authReducer from "./auth"
import langReducer from "./lang"
import themeReducer from "./theme"
import fighterReducer from "./fighter"
import eventReducer from "./event"

const rootReducer = combineReducers({
	weightClassReducer,
	authReducer,
	langReducer,
	themeReducer,
	fighterReducer,
	eventReducer
})

export default rootReducer
