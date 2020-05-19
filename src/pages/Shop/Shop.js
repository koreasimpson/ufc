import React, { Component, Fragment } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"

const pageData = {
	title: "상점",
	description: "UFC 제품을 제공하는 페이지",
	keywords: "UFC, UFC product, UFC 상품, UFC 제품",
	ogTItle: "UFC 상품",
	ogDescription: "UFC 제품을 제공하는 페이지",
	twitterTitle: "UFC 상품"
}

export default class Shop extends Component {
	render() {
		return (
			<Fragment>
				<AppHelmet pageData={pageData} />
				<div>Hello, shop page here</div>
			</Fragment>
		)
	}
}
