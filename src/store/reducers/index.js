import { combineReducers } from "redux"
import weightClassReducer from "./weightClass"
import authReducer from "./auth"
import langReducer from "./lang"
import themeReducer from "./theme"
import fighterReducer from "./fighter"

const rootReducer = combineReducers({
	weightClassReducer,
	authReducer,
	langReducer,
	themeReducer,
	fighterReducer
})

export default rootReducer
