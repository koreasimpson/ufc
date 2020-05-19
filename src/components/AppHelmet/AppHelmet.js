import React, { Component } from "react"
import { Helmet } from "react-helmet"

export default class AppHelmet extends Component {
	constructor(props) {
		super(props)
		this.pageData = props.pageData ? props.pageData : []
	}
	render() {
		const {
			title = "리액트 포트폴리오",
			description = "구공찬, 프론트엔드 포트폴리오, 리액트",
			keywords = "웹, 웹 개발, 프론트엔드, 프론트엔드 개발, UI, 접근성",
			ogTitle = "리액트 포트폴리오",
			ogDescription = "CRA를 통해 만든 UFC 홈페이지입니다. 이 사이트는 개인 포트폴리오 용도이며, 상업적인 의도가 없습니다.",
			twitterTitle = "리액트 포트폴리오"
		} = this.pageData
		return (
			<Helmet>
				<title>{`${title} | UFC`}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="twitter:title" content={`${twitterTitle} | UFC`} />
			</Helmet>
		)
	}
}
