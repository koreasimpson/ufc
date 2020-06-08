import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import styled from "styled-components"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { device } from "config/responsive"
import defaultFighterImg from "assets/img/fighters/fighter_profile.png"
import store from "store"
import { SET_TARGET_FIGHTERS } from "store/actions/fighter"

const Container = styled.li`
	text-align: left;

	.groupTitle {
		text-transform: uppercase;
		color: ${({ theme }) => theme.majorColor};
	}

	.champion {
		p {
			margin-top: 10px;
		}

		dd {
			position: relative;
			height: 150px;
			border-bottom: 1px solid #eee;
			align-items: normal;

			figure {
				position: absolute;
				bottom: 0;
				right: 0;
				transition: transform 0.5s;
				transform-origin: bottom;
				width: 80%;

				&:hover {
					transform: scale(1.1);
				}

				img {
					width: 100%;
				}
			}
		}
	}

	dd {
		a {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 10px;
		}

		.rank {
			display: inline-block;
			width: 30px;
		}

		.name {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			display: inline-block;
			width: calc(100% - 60px);
			flex: 1;
		}
	}

	.icon {
		width: 30px;
		position: relative;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;

		i {
			display: inline-block;
			margin-right: 5px;
			border-right: 4px solid transparent;
			border-left: 4px solid transparent;
			width: 0;
			height: 0;
		}

		[class*="up"] {
			border-bottom: 6px solid #a3d20a;
			line-height: 10px;
		}

		[class*="down"] {
			border-top: 6px solid #d20a0a;
			line-height: 0;
		}

		[class*="new"] {
			&:after {
				content: "new";
				display: inline-block;
				font-size: 0.8rem;
				color: gold;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}

		[class*="equal"] {
			&:after {
				content: "-";
				display: inline-block;
				font-size: 0.8rem;
			}
		}
	}
`

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
			<Container className={className}>
				<dl>
					<div className="champion">
						<dt className="groupTitle">{weightClass} Weight</dt>
						<dd>
							<p className="name" title={champion ? champion.name : null}>
								{champion ? champion.name : null}
							</p>
							<figure>
								<img src={defaultFighterImg} alt="챔피언 사진" />
							</figure>
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
			</Container>
		)
	}
}

const TransRankingList = withTranslation()(RankingList)

const mapStateToProps = state => ({
	fighters: state.fighterReducer.fighters
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransRankingList)
