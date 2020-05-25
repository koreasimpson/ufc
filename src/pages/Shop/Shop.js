import React, { Component, Fragment } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"

const Container = styled.main``

const pageMetaData = {
	title: "상점",
	description: "UFC 제품을 제공하는 페이지",
	keywords: "UFC, UFC product, UFC 상품, UFC 제품",
	ogTItle: "UFC 상품",
	ogDescription: "UFC 제품을 제공하는 페이지",
	twitterTitle: "UFC 상품"
}

export default class Shop extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { className } = this.props
		return (
			<Container className={className}>
				<AppHelmet pageData={pageMetaData} />
				<section className="contentWrap">
					<h2>Shop</h2>
				</section>
			</Container>
		)
	}
}
