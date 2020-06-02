import store from "store"
import { SET_ALL_FIGHTERS } from "store/actions/fighter"
import { SET_ALL_EVENTS } from "store/actions/event.js"

export const fetchFighters = () => {
	fetch("//allaboutufc-26533.firebaseio.com/fighter.json")
		.then(res => res.json())
		.then(data => {
			store.dispatch({ type: SET_ALL_FIGHTERS, value: data.data })
		})
		.catch(err => console.error(err.message))
}

export const fetchEvents = () => {
	fetch("//allaboutufc-26533.firebaseio.com/event.json")
		.then(res => res.json())
		.then(data => {
			store.dispatch({ type: SET_ALL_EVENTS, value: data })
		})
		.catch(err => console.error(err.message))
}
