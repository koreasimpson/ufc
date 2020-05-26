import React, { Component } from "react"
import EventItem from "components/Event/EventItem"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import langdingBg from "assets/img/background_event.jpg"
import db from "firebaseInit"

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

const pageMetaData = {
	title: "이벤트",
	description: "UFC 이벤트 정보를 제공하는 페이지",
	keywords: "UFC, UFC event, UFC 이벤트",
	ogTItle: "UFC 이벤트",
	ogDescription: "UFC 이벤트 정보를 제공하는 페이지",
	twitterTitle: "UFC 이벤트"
}

export default class Event extends Component {
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
		return (
			<Container className="">
				<AppHelmet pageData={pageMetaData} />
				<div className="landing bg">
					<p className="desc">UFC Fight Events</p>
					<div className="buttonWrap">
						<button>경기 상세 정보</button>
					</div>
				</div>
				<div className="contentWrap">
					<ul className="category">
						<li>
							<button>예정 이벤트</button>
						</li>
						<li>
							<button>과거 이벤트</button>
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
