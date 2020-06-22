import React, { Component } from "react"
import { connect } from "react-redux"
import { withTranslation, Trans } from "react-i18next"

import EventItem from "components/Event/EventItem"
import AppHelmet from "components/AppHelmet/AppHelmet"
import StyledWrapper from "./EventStyled"
import Layout from "components/Layout/Layout"

import langdingBg from "assets/img/background_event.jpg"

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
			<StyledWrapper className="">
				<AppHelmet metaData="Event" />
				<Layout hasLanding={true}>
					<Layout.Landing
						headingText={<Trans i18nKey="pages.Event.h2" />}
						backgroundImg={langdingBg}
						backgroundImgWidth="2000"
						backgroundImgHeight="1333"></Layout.Landing>
					<Layout.Content>
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
								<p className="noEvent">
									<Trans i18nKey="pages.Event.noEvents" />
								</p>
							)}
						</ul>
					</Layout.Content>
				</Layout>
			</StyledWrapper>
		)
	}
}

const TransEvent = withTranslation()(Event)

const mapStateToProps = state => ({
	events: state.eventReducer.events
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransEvent)
