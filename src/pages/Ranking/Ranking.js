import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"
import styled from "styled-components"

import AppHelmet from "components/AppHelmet/AppHelmet"
import RankingList from "components/Ranking/RankingList"
import weightClassConfig from "config/weightClass"
import { device } from "config/responsive"

const Container = styled.main`
	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		max-width: 1024px;
		margin: 0 auto;
	}
	.group {
		width: 25%;
		min-width: 250px;
		padding: 20px;
		box-sizing: border-box;
	}

	@media screen and ${device.mobileTabletOnly} {
		.content {
			justify-content: space-evenly;
		}
	}

	@media screen and ${device.mobileOnly} {
		.content {
			justify-content: space-evenly;
		}
	}
`

class Ranking extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		const { className } = this.props
		return (
			<Container className={className}>
				<AppHelmet metaData="Ranking" />
				<section className="contentWrap">
					<h2>ATHLETE RANKINGS</h2>
					<ul className="content">
						{weightClassConfig.map((weightClass, index) => {
							return <RankingList className="group" weightClass={weightClass} key={index} />
						})}
					</ul>
				</section>
			</Container>
		)
	}
}

const TransRanking = withTranslation()(Ranking)

export default connect()(TransRanking)
