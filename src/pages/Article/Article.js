import React, { Component, Fragment } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"

const pageData = {
	title: "기사",
	description: "UFC 소식을 제공하는 페이지",
	keywords: "UFC, UFC article, UFC 기사, UFC 소식",
	ogTItle: "UFC 기사",
	ogDescription: "UFC 소식을 제공하는 페이지",
	twitterTitle: "UFC 기사"
}

export default class Article extends Component {
	render() {
		return (
			<Fragment>
				<AppHelmet pageData={pageData} />
				<div>나는 article 페이지야</div>
			</Fragment>
		)
	}
}
