import React, { Component, Fragment } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"

const Container = styled.main``

const pageMetaData = {
	title: "고객지원",
	description: "고객지원 페이지",
	keywords: "UFC, UFC support, UFC 고객지원",
	ogTItle: "UFC 고객지원",
	ogDescription: "고객지원 페이지",
	twitterTitle: "UFC 고객지원"
}

export default class Support extends Component {
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
					<h2>Support</h2>
					<div>준비중</div>
				</section>
			</Container>
		)
	}
}
