import {
	FLY_WEIGHT,
	BANTHOM_WEIGHT,
	FEATHER_WEIGHT,
	LIGHT_WEIGHT,
	WELTER_WEIGHT,
	MIDDLE_WEIGHT,
	LIGHTHEAVY_WEIGHT,
	HEAVY_WEIGHT
} from "../actions/weightClass"

const initValue = {
	weightClass: "fly"
}

const weightClassReducer = (state = initValue, action) => {
	switch (action.type) {
		case FLY_WEIGHT:
			return (state = {
				...state,
				weightClass: "fly"
			})
		case BANTHOM_WEIGHT:
			return (state = {
				...state,
				weightClass: "banthom"
			})
		case FEATHER_WEIGHT:
			return (state = {
				...state,
				weightClass: "feather"
			})
		case LIGHT_WEIGHT:
			return (state = {
				...state,
				weightClass: "light"
			})
		case WELTER_WEIGHT:
			return (state = {
				...state,
				weightClass: "welter"
			})
		case MIDDLE_WEIGHT:
			return (state = {
				...state,
				weightClass: "middle"
			})
		case LIGHTHEAVY_WEIGHT:
			return (state = {
				...state,
				weightClass: "lightheavy"
			})
		case HEAVY_WEIGHT:
			return (state = {
				...state,
				weightClass: "heavy"
			})
		default:
			return state
	}
}

export default weightClassReducer
