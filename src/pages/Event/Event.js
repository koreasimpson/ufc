import React, { Component } from "react"
import EventItem from "components/Event/EventItem"

export default class Event extends Component {
	render() {
		return (
			<div>
				<ul>
					<EventItem />
				</ul>
			</div>
		)
	}
}
