import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"

const Container = styled.main``

const pageMetaData = {
	title: "기사",
	description: "UFC 소식을 제공하는 페이지",
	keywords: "UFC, UFC article, UFC 기사, UFC 소식",
	ogTItle: "UFC 기사",
	ogDescription: "UFC 소식을 제공하는 페이지",
	twitterTitle: "UFC 기사"
}

export default class Article extends Component {
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
					<h2>비디오, 기사 및 갤러리</h2>
					<div>준비중</div>
				</section>
			</Container>
		)
	}
}
