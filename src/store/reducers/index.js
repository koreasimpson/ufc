import { combineReducers } from "redux"
import weightClassReducer from "./weightClass"
import authReducer from "./auth"
import langReducer from "./lang"
import languageTextReducer from "./languageText"
import themeReducer from "./theme"

const rootReducer = combineReducers({
	weightClassReducer,
	authReducer,
	langReducer,
	languageTextReducer,
	themeReducer
})

export default rootReducer
