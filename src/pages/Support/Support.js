import React, { Component, Fragment } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"

const pageData = {
	title: "고객지원",
	description: "고객지원 페이지",
	keywords: "UFC, UFC support, UFC 고객지원",
	ogTItle: "UFC 고객지원",
	ogDescription: "고객지원 페이지",
	twitterTitle: "UFC 고객지원"
}

export default class Support extends Component {
	render() {
		return (
			<Fragment>
				<AppHelmet pageData={pageData} />
				<div>안녕 나는 서포트 페이지야</div>
			</Fragment>
		)
	}
}
