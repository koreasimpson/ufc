import React, { Component, createRef } from "react"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"

const Container = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 160px;

	.eventType,
	.moreInfo {
		width: 150px;
	}
	.fighterProfile,
	.eventInfo {
		flex: 1;
	}

	.eventType {
		text-align: center;
	}
	.fighterProfile {
		display: flex;
		justify-content: center;
		img:not(.noImage) {
			width: 150px;
		}
		img.noImage {
			height: 160px;
			padding: 10px 15px;
		}
	}
`

class EventItem extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.fighterProfileElement = {
			left: createRef(),
			right: createRef()
		}
		this.fighterProfilePath = {
			left: null,
			right: null
		}
	}

	setFighterProfileImage = (fighter, side) => {
		try {
			this.fighterProfilePath[side] = require(`assets/img/fighters/${fighter}.png`)
		} catch {
			this.fighterProfilePath[side] = require(`assets/img/fighters/fighter_${side}.png`)
			if (this.fighterProfileElement[side].current)
				this.fighterProfileElement[side].current.classList.add("noImage")
		}
	}

	render() {
		const { eventNumber, eventLocation, eventDate, mainEvent } = this.props.eventData
		const [{ fighter: fighterLeft }, { fighter: fighterRight }] = mainEvent
		this.setFighterProfileImage(fighterLeft, "left")
		this.setFighterProfileImage(fighterRight, "right")
		return (
			<Container>
				{eventNumber === "fightPass" ? (
					<p className="eventType">
						<span>
							<Trans i18nKey="common.ufc" />
						</span>
						<i>
							<Trans
								i18nKey="components.EventItem.fightPass"
								components={[<strong>NIGHT</strong>]}
							/>
						</i>
					</p>
				) : (
					<p className="eventType">
						<span>
							<Trans i18nKey="common.ufc" />
						</span>
						<i>{eventNumber}</i>
					</p>
				)}
				<figure className="fighterProfile">
					<img
						src={this.fighterProfilePath.left}
						alt="fighter"
						ref={this.fighterProfileElement.left}
					/>
					<img
						src={this.fighterProfilePath.right}
						alt="fighter"
						ref={this.fighterProfileElement.right}
					/>
					<figcaption className="a11yHidden"></figcaption>
				</figure>
				<div className="eventInfo">
					<p>
						<strong className="mainEvent">
							{fighterLeft} VS {fighterRight}
						</strong>
					</p>
					<p>{eventDate ? `${eventDate} / ` : ""}</p>
					<p>{eventLocation}</p>
				</div>
				<button className="moreInfo">
					<Trans i18nKey="common.moreInfo" />
				</button>
			</Container>
		)
	}
}

export default withTranslation()(EventItem)
