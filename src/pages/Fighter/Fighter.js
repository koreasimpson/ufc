import React, { Component } from "react"
import { NavLink, Route } from "react-router-dom"
import Ranking from "components/Ranking/Ranking"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"

import langdingBg from "assets/img/background_fighters.jpg"

const pageMetaData = {
	title: "선수",
	description: "UFC 선수정보를 제공하는 페이지",
	keywords: "UFC, UFC fighters, UFC 선수, UFC 체급별 선수",
	ogTItle: "UFC 선수",
	ogDescription: "UFC 선수정보를 제공하는 페이지",
	twitterTitle: "UFC 선수"
}

const Container = styled.main`
	.landing {
		background-image: url(${langdingBg});
	}
	.contentWrap {
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
	}
`

export default class Fighter extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { className } = this.props
		const { url } = this.props.match
		return (
			<Container className={className}>
				<AppHelmet pageData={pageMetaData} />
				<section className="landing bg">
					<p className="desc">UFC Fighters</p>
				</section>
				<section className="contentWrap">
					<ul>
						<li>
							<NavLink to={`${url}/all`}>모든 선수</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/bantam`}>밴텀급</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/feather`}>페더급</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/light`}>라이트급</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/welter`}>웰터급</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/middle`}>미들급</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/lightheavy`}>라이트헤비급</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/heavy`}>헤비급</NavLink>
						</li>
					</ul>
					<div className="route">
						<Route path={`${url}/:weight`} component={Ranking} />
					</div>
				</section>
			</Container>
		)
	}
}
