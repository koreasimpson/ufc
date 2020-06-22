import React, { Component, createRef } from "react"
import { withTranslation, Trans } from "react-i18next"
import { notification } from "antd"

import StyledWrapper from "./EventItemStyled"
import defaultLeftFighterImg from "assets/img/fighters/fighter_left.png"
import defaultRightFighterImg from "assets/img/fighters/fighter_right.png"

class EventItem extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.leftSideFighter = createRef()
		this.rightSideFighter = createRef()
	}

	handleMoreInfo = () => {
		notification.info({
			message: this.props.t("common.commingSoon"),
			placement: "topRight"
		})
	}

	setProfileImage = (src, side) => {
		const img = new Image()
		const This = this
		img.onload = function() {
			if (side === "left" && This.leftSideFighter.current) {
				This.leftSideFighter.current.src = src
				This.leftSideFighter.current.classList.add("have")
			} else if (side === "right" && This.rightSideFighter.current) {
				This.rightSideFighter.current.src = src
				This.rightSideFighter.current.classList.add("have")
			}
		}
		img.onerror = function() {
			console.clear()
			if (side === "left" && This.leftSideFighter.current) {
				This.leftSideFighter.current.src = defaultLeftFighterImg
				This.leftSideFighter.current.classList.remove("have")
			} else if (side === "right" && This.rightSideFighter.current) {
				This.rightSideFighter.current.src = defaultRightFighterImg
				This.rightSideFighter.current.classList.remove("have")
			}
		}
		img.src = src
	}

	render() {
		const { eventNumber, eventLocation, eventDate, eventRoster } = this.props.eventData
		const { fighters } = eventRoster.mainEvent
		const { red: fighterLeft, blue: fighterRight } = fighters
		this.setProfileImage(
			`https://kr.object.ncloudstorage.com/ufc/fighters/${fighterLeft.replace(/\s/g, "_")}.png`,
			"left"
		)
		this.setProfileImage(
			`https://kr.object.ncloudstorage.com/ufc/fighters/${fighterRight.replace(/\s/g, "_")}.png`,
			"right"
		)
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
					<img src={defaultLeftFighterImg} alt={fighterLeft} ref={this.leftSideFighter} />
					<img src={defaultRightFighterImg} alt={fighterRight} ref={this.rightSideFighter} />
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
