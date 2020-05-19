import React, { Component, Fragment } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"

const pageData = {
	title: "라이브",
	description: "UFC 경기 영상을 라이브로 제공하는 페이지",
	keywords: "UFC, UFC live, UFC 라이브",
	ogTItle: "UFC 라이브",
	ogDescription: "UFC 경기 영상을 라이브로 제공하는 페이지",
	twitterTitle: "UFC 라이브"
}

export default class Live extends Component {
	render() {
		return (
			<Fragment>
				<AppHelmet pageData={pageData} />
				<div>Hi, Live page</div>
			</Fragment>
		)
	}
}
