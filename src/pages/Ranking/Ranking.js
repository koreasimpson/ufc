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
		const { className, t } = this.props
		const pageMetaData = {
			title: t("meta.Ranking.title"),
			description: t("meta.Ranking.description"),
			keywords: t("meta.Ranking.keywords"),
			ogTitle: t("meta.Ranking.ogTitle"),
			ogDescription: t("meta.Ranking.ogDescription"),
			twitterTitle: t("meta.Ranking.twitterTitle")
		}
		return (
			<Container className={className}>
				<AppHelmet pageMetaData={pageMetaData} />
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
