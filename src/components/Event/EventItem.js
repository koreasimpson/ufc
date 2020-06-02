import React, { Component, createRef } from "react"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"
import { breakpoint, device } from "config/responsive"

const Container = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 160px;
	padding: 1rem 2rem;
	margin: 0 auto;
	margin-top: 1rem;
	border: 1px solid ${({ theme }) => theme.textColor};
	box-sizing: border-box;

	&:hover {
		border: 1px solid ${({ theme }) => theme.majorColor};
		box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.majorColor} inset;
	}

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
		.ufc {
			font-size: 1.2rem;
			font-weight: bold;
			display: block;
		}
		i {
			font-size: 0.8rem;
		}
		strong {
			text-decoration: underline;
			font-size: 0.6rem;
			transform: translateY(-2px);
			position: relative;
			display: inline-block;
		}
	}

	.fighterProfile {
		display: flex;
		justify-content: center;
		img {
			height: 160px;
			padding: 10px 15px;
		}
		img.have {
			width: 150px;
			height: auto;
			padding: 0;
		}
	}

	.moreInfo {
		border: 1px solid ${({ theme }) => theme.textColor};
		background-color: ${({ theme }) => theme.bgColor};
		padding: 15px;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;

		span {
			position: relative;
			z-index: 1;
			transition: all 0.5s;
		}

		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0%;
			left: -100%;
			background-color: ${({ theme }) => theme.majorColor};
			transition: all 0.5s;
		}

		&:hover {
			border: 1px solid ${({ theme }) => theme.bgColor};

			span {
				position: relative;
				color: ${({ theme }) => theme.bgColor};
				z-index: 1;
			}

			&::after {
				left: 0;
			}
		}
	}

	@media screen and ${device.mobileTabletOnly} {
		flex-direction: column;
		height: inherit;

		& > * {
			margin-top: 1.5rem;
		}

		.eventInfo > * {
			margin-top: 1rem;
		}
	}

	@media screen and ${device.mobileOnly} {
		.fighterProfile {
			img,
			img.have {
				width: 50%;
				height: auto;
			}
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

	handleMoreInfo = () => {
		alert("컨텐츠 준비중입니다 :)")
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
		const { championMatch, weightClass, fighters } = eventRoster.mainEvent
		const { red: fighterLeft, blue: fighterRight } = fighters
		this.setFighterProfileImage(fighterLeft, "left")
		this.setFighterProfileImage(fighterRight, "right")
		return (
			<Container>
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
			</Container>
		)
	}
}

export default withTranslation()(EventItem)
