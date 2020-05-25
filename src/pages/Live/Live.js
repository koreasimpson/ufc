import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"

const Container = styled.main``

const pageMetaData = {
	title: "라이브",
	description: "UFC 경기 영상을 라이브로 제공하는 페이지",
	keywords: "UFC, UFC live, UFC 라이브",
	ogTItle: "UFC 라이브",
	ogDescription: "UFC 경기 영상을 라이브로 제공하는 페이지",
	twitterTitle: "UFC 라이브"
}

export default class Live extends Component {
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
					<h2>Live</h2>
					<div>준비중</div>
				</section>
			</Container>
		)
	}
}
