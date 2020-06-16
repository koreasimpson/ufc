import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"

import AppHelmet from "components/AppHelmet/AppHelmet"
import RankingList from "components/Ranking/RankingList"
import weightClassConfig from "config/weightClass"
import StyledWrapper from "./RankingStyled"

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
				<section className="contentWrap">
					<h2>ATHLETE RANKINGS</h2>
					<ul className="content">
						{weightClassConfig.map((weightClass, index) => {
							return <RankingList className="group" weightClass={weightClass} key={index} />
						})}
					</ul>
				</section>
			</StyledWrapper>
		)
	}
}

const TransRanking = withTranslation()(Ranking)

export default connect()(TransRanking)
