import React, { Component, Fragment } from "react"
import EventItem from "components/Event/EventItem"
import AppHelmet from "components/AppHelmet/AppHelmet"

const pageData = {
	title: "이벤트",
	description: "UFC 이벤트 정보를 제공하는 페이지",
	keywords: "UFC, UFC event, UFC 이벤트",
	ogTItle: "UFC 이벤트",
	ogDescription: "UFC 이벤트 정보를 제공하는 페이지",
	twitterTitle: "UFC 이벤트"
}

export default class Event extends Component {
	render() {
		return (
			<Fragment>
				<AppHelmet pageData={pageData} />
				<div>
					<ul>
						<EventItem />
					</ul>
				</div>
			</Fragment>
		)
	}
}
