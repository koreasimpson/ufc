import React, { Component } from "react"

export default class EventItem extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { eventNumber, eventTitle, eventLocation, eventDate, fighter1, fighter2 } = this.props
		return (
			<li>
				{eventNumber === "fightPass" ? (
					<p>
						<span>UFC</span>
						<i>
							FIGHT <span>NIGHT</span>
						</i>
					</p>
				) : (
					<p>
						<span>UFC</span>
						<i>{eventNumber}</i>
					</p>
				)}
				<figure>
					<img src="" alt="fighter1" />
					<img src="" alt="fighter2" />
					<figcaption className="a11yHidden"></figcaption>
				</figure>
				<p>
					<strong className="mainEvent">
						{fighter1} VS {fighter2}
					</strong>
					<span className="">
						{eventDate ? `${eventDate} / ` : ""}
						{eventLocation}
					</span>
				</p>
				<button>상세 정보</button>
			</li>
		)
	}
}
