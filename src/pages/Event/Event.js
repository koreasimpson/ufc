import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"

import { device } from "config/responsive"
import EventItem from "components/Event/EventItem"
import AppHelmet from "components/AppHelmet/AppHelmet"
import langdingBg from "assets/img/background_event.jpg"

const Container = styled.main`
	.landing {
		background-image: url(${langdingBg});
	}
	.contentWrap {
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
	}
	.category {
		text-align: center;
		button {
			display: inline-block;
			font-size: 3rem;
			font-weight: bold;
			padding-left: 20px;
			padding-right: 20px;
			color: ${({ theme }) => theme.textColor};

			&.selected {
				color: ${({ theme }) => theme.majorColor};
				border-bottom: 1px solid ${({ theme }) => theme.majorColor};
			}
		}
	}
	.eventItemList {
		margin-top: 80px;
	}

	@media screen and ${device.mobileTabletOnly} {
		.category {
			margin-top: 3rem;
		}
		.eventItemList {
			margin-top: 5rem;
		}
	}

	@media screen and ${device.mobileOnly} {
		.category {
			display: flex;
		}
	}
`

class Event extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.today = new Date()
		this.state = {
			category: "upcoming"
		}
	}

	toggleEventCategory = value => {
		this.setState({
			category: value
		})
	}

	filteredEvent = events => {
		return this.setCategoryEvent(events).sort((a, b) => {
			return a.eventDate - b.eventDate
		})
	}

	setEventDateFormat = value => {
		value = value.map((val, index) => {
			return index === 0 ? Number("20" + val) : index === 1 ? Number(val - 1) : Number(val)
		})
		return value
	}

	setCategoryEvent = (events, value = this.state.category) => {
		let eventDate = []
		return events.filter(event => {
			eventDate = event.eventDate.split("/")[0].split(".")
			const [year, month, day] = this.setEventDateFormat(eventDate)
			if (value === "upcoming") {
				return this.today < new Date(year, month, day)
			} else {
				return this.today > new Date(year, month, day)
			}
		})
	}

	render() {
		const { events } = this.props
		const filteredEvent = this.filteredEvent(events)

		return (
			<Container className="">
				<AppHelmet metaData="Event" />
				<div className="landing bg">
					<h2 className="desc">
						<Trans i18nKey="pages.Event.h2" />
					</h2>
				</div>
				<div className="contentWrap">
					<div className="category">
						<button
							onClick={e => this.toggleEventCategory("upcoming")}
							className={this.state.category === "upcoming" ? "selected" : null}>
							<Trans i18nKey="pages.Event.upcommingEvent" />
						</button>
						<button
							onClick={e => this.toggleEventCategory("past")}
							className={this.state.category === "past" ? "selected" : null}>
							<Trans i18nKey="pages.Event.pastEvent" />
						</button>
					</div>
					<ul className="eventItemList">
						{events.length ? (
							filteredEvent.map((event, index) => <EventItem key={index} eventData={event} />)
						) : (
							<p>
								<Trans i18nKey="pages.Event.noEvents" />
							</p>
						)}
					</ul>
				</div>
			</Container>
		)
	}
}

const TransEvent = withTranslation()(Event)

const mapStateToProps = state => ({
	events: state.eventReducer.events
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransEvent)
