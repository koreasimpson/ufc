import React, { Component } from "react"
import EventItem from "components/Event/EventItem"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import langdingBg from "assets/img/background_event.jpg"
import db from "firebaseInit"
import { withTranslation, Trans } from "react-i18next"

// const data = {
// 	eventNumber: "fightPass",
// 	eventLocation: "Ginasio Nilson Nelson, 브라질",
// 	eventDate: "15.03.20 / 07:00 KST",
// 	weightClass: "light",
// 	mainEvent: [
// 		{
// 			fighter: "LEE"
// 		},
// 		{
// 			fighter: "OLIVEIRA"
// 		}
// 	]
// }

// db.collection("event")
// 	.doc("15.03.20")
// 	.set(data)

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
		li {
			display: inline-block;
			font-size: 3rem;
			font-weight: bold;
			padding-left: 20px;
			padding-right: 20px;
			color: ${({ theme }) => theme.textColor};
			opacity: 0.5;

			&.selected {
				color: ${({ theme }) => theme.majorColor};
				opacity: 1;
			}
		}
	}
`

class Event extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.state = {
			eventData: [],
			getData: async () => {
				await db
					.collection("event")
					.get()
					.then(res => {
						res.forEach(doc => {
							let newData = this.state.eventData
							newData.push(doc.data())
							this.setState({
								eventData: newData
							})
						})
					})
					.catch(err => {
						console.error("error =", err)
					})
			}
		}
		this.state.getData()
	}

	render() {
		const { t } = this.props
		const pageMetaData = {
			title: t("meta.Event.title"),
			description: t("meta.Event.description"),
			keywords: t("meta.Event.keywords"),
			ogTitle: t("meta.Event.ogTitle"),
			ogDescription: t("meta.Event.ogDescription"),
			twitterTitle: t("meta.Event.twitterTitle")
		}
		return (
			<Container className="">
				<AppHelmet pageData={pageMetaData} />
				<div className="landing bg">
					<h2 className="desc">
						<Trans i18nKey="pages.Event.h2" />
					</h2>
					<div className="buttonWrap">
						<button>
							<Trans i18nKey="pages.Event.moreInfo" />
						</button>
					</div>
				</div>
				<div className="contentWrap">
					<ul className="category">
						<li>
							<button>
								<Trans i18nKey="pages.Event.upcommingEvent" />
							</button>
						</li>
						<li>
							<button>
								<Trans i18nKey="pages.Event.pastEvent" />
							</button>
						</li>
					</ul>
					<ul>
						{this.state.eventData.map((event, index) => (
							<EventItem key={index} eventData={event} />
						))}
					</ul>
				</div>
			</Container>
		)
	}
}

export default withTranslation()(Event)
