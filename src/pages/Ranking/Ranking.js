import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"
import { connect } from "react-redux"
import RankingList from "components/Ranking/RankingList"

const Container = styled.main`
	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.group {
		width: 25%;
		min-width: 250px;
		padding: 20px;
		box-sizing: border-box;
	}
`

class Ranking extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.rankingListGroup = [
			"pound-for-pound",
			"flyWeight",
			"bantamWeight",
			"featherWeight",
			"lightWeight",
			"welterWeight",
			"middleWeight",
			"lightheavyWeight",
			"heavyWeight"
		]
	}
	render() {
		const { className } = this.props
		return (
			<Container className={className}>
				<AppHelmet metaData="Ranking" />
				<section className="contentWrap">
					<h2>ATHLETE RANKINGS</h2>
					<div className="content">
						{this.rankingListGroup.map((group, index) => {
							return <RankingList className="group" group={group} key={index} />
						})}
					</div>
				</section>
			</Container>
		)
	}
}

const TransRanking = withTranslation()(Ranking)

export default connect()(TransRanking)
