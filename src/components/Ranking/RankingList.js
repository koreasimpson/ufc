import React, { Component, Fragment } from "react"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import store from "store"
import { SET_TARGET_FIGHTERS } from "store/actions/fighter"
import defaultFighterImg from "assets/img/fighters/fighter_profile.png"
import StyledWrapper from "./RankingListStyled"

class RankingList extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	setRankingList = weightClass => {
		if (this.props.fighters.length === 0) return []
		let rankingList = this.props.fighters.filter(fighter => {
			return fighter.ranking.hasOwnProperty(weightClass)
		})
		rankingList.sort((a, b) => {
			return a.ranking[weightClass].current - b.ranking[weightClass].current
		})
		let champion = rankingList[0]
		rankingList.splice(0, 1)
		return { champion, rankingList }
	}

	setRankChange = ranking => {
		const { current, past } = ranking
		let type, value
		type = past == null ? "new" : current === past ? "equal" : current > past ? "up" : "down"
		if (type === "up" || type === "down") {
			value = Math.abs(past - current)
		}
		return { type, value }
	}

	handleLink = ranker => {
		store.dispatch({ type: SET_TARGET_FIGHTERS, value: ranker })
	}

	render() {
		const { className, weightClass } = this.props
		const { champion, rankingList = [] } = this.setRankingList(weightClass)

		return (
			<StyledWrapper className={className}>
				<dl>
					<div className="champion">
						<dt className="groupTitle">{weightClass} Weight</dt>
						<dd>
							{champion ? (
								<Fragment>
									<Link
										to={`/fighter/profile/${champion.name}`}
										className="name"
										title={champion ? champion.name : null}
										onClick={() => this.handleLink(champion)}>
										{champion ? champion.name : null}
									</Link>
									<figure>
										<img src={defaultFighterImg} alt="챔피언 사진" />
									</figure>
								</Fragment>
							) : (
								<p>공석</p>
							)}
						</dd>
					</div>
					<div className="rankers">
						{rankingList.map((ranker, index) => {
							return (
								<dd key={index}>
									<Link
										to={`/fighter/profile/${ranker.name}`}
										onClick={() => this.handleLink(ranker)}>
										<span className="rank">{ranker.ranking[weightClass].current}</span>
										<span className="name" title={ranker.name}>
											{ranker.name}
										</span>
										<span className="icon">
											<i className={this.setRankChange(ranker.ranking[weightClass]).type}></i>
											{this.setRankChange(ranker.ranking[weightClass]).value}
										</span>
									</Link>
								</dd>
							)
						})}
					</div>
				</dl>
			</StyledWrapper>
		)
	}
}

const TransRankingList = withTranslation()(RankingList)

const mapStateToProps = state => ({
	fighters: state.fighterReducer.fighters
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransRankingList)
