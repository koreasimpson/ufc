import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import { connect } from "react-redux"

import AppHelmet from "components/AppHelmet/AppHelmet"
import RankingList from "components/Ranking/RankingList"
import weightClassConfig from "config/weightClass"
import StyledWrapper from "./RankingStyled"
import Layout from "components/Layout/Layout"

class Ranking extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		const { className } = this.props
		return (
			<StyledWrapper className={className}>
				<AppHelmet metaData="Ranking" />
				<Layout>
					<Layout.Content>
						<h2 className="title">
							<Trans i18nKey={"pages.Ranking.h2"} />
						</h2>
						<ul className="content">
							{weightClassConfig.map((weightClass, index) => {
								return <RankingList className="group" weightClass={weightClass} key={index} />
							})}
						</ul>
					</Layout.Content>
				</Layout>
			</StyledWrapper>
		)
	}
}

const TransRanking = withTranslation()(Ranking)

export default connect()(TransRanking)
