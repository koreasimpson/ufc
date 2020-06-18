import React, { Component, createRef } from "react"
import { withTranslation, Trans } from "react-i18next"
import { notification } from "antd"

import StyledWrapper from "./EventItemStyled"

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

	handleMoreInfo = () => {
		notification.info({
			message: this.props.t("common.commingSoon"),
			placement: "topRight"
		})
	}

	setFighterProfileImage = (fighter, side) => {
		try {
			this.fighterProfilePath[side] = require(`assets/img/fighters/${fighter}.png`)
			if (this.fighterProfileElement[side].current)
				this.fighterProfileElement[side].current.classList.add("have")
		} catch {
			this.fighterProfilePath[side] = require(`assets/img/fighters/fighter_${side}.png`)
			if (this.fighterProfileElement[side].current)
				this.fighterProfileElement[side].current.classList.remove("have")
		}
	}

	render() {
		const { eventNumber, eventLocation, eventDate, eventRoster } = this.props.eventData
		const { fighters } = eventRoster.mainEvent
		const { red: fighterLeft, blue: fighterRight } = fighters
		this.setFighterProfileImage(fighterLeft, "left")
		this.setFighterProfileImage(fighterRight, "right")
		return (
			<StyledWrapper>
				{eventNumber === "fightPass" ? (
					<p className="eventType">
						<span className="ufc">
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
					<p className="eventType numbering">
						<span className="ufc">
							<Trans i18nKey="common.ufc" />
						</span>
						<i>{eventNumber}</i>
					</p>
				)}
				<figure className="fighterProfile">
					<img
						src={this.fighterProfilePath.left}
						ref={this.fighterProfileElement.left}
						alt="fighter"
					/>
					<img
						src={this.fighterProfilePath.right}
						ref={this.fighterProfileElement.right}
						alt="fighter"
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
				<button className="moreInfo" onClick={this.handleMoreInfo}>
					<span>
						<Trans i18nKey="common.moreInfo" />
					</span>
				</button>
			</StyledWrapper>
		)
	}
}

export default withTranslation()(EventItem)
