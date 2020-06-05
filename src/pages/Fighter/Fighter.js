import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"
import { withRouter, Route } from "react-router-dom"
import { connect } from "react-redux"

import store from "store"
import { SET_TARGET_FIGHTERS } from "store/actions/fighter"
import langdingBg from "assets/img/background_fighters.jpg"
import AppHelmet from "components/AppHelmet/AppHelmet"
import FighterList from "components/Fighter/FighterList"
import FighterDetail from "components/Fighter/FighterDetail"
import weightClassConfig from "config/weightClass"
import { breakpoint, device } from "config/responsive"
import { replaceSpecialChar } from "assets/lib/validation"

const Container = styled.main`
	.landing {
		background-image: url(${langdingBg});
	}
	.targetFighter.aka {
		font-size: 2rem;
	}
	.targetFighter.title {
		margin-top: 1rem;
	}
	.contentWrap {
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};

		.contentHeader,
		.contentBody {
			max-width: ${breakpoint.laptop}px;
			margin: 0 auto;
		}
		.contentHeader {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 20px;
			margin-bottom: 20px;
			border-bottom: 1px solid ${({ theme }) => theme.textColor};
		}
	}
	.searchForm {
		input {
			padding: 10px 20px;
		}
		.searchResultLength {
			display: inline-block;
			margin-right: 1rem;
		}
	}
	.fighterList {
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
	}
	.goBack {
		padding: 15px 35px;
		transform: translateY(8rem);
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.majorColor};
	}

	@media screen and ${device.mobileTabletOnly} {
		.contentHeader {
			padding-top: 20px;
			flex-direction: column;

			& > * {
				margin-top: 15px;
			}

			.searchForm input {
				width: 150px;
			}
		}

		.fighterList {
			flex-wrap: nowrap;
			flex-direction: column;
			align-items: center;
		}
	}
`

class Fighter extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.state = {
			weightClass: "all",
			searchValue: ""
		}
		this.filteredFighters = []
	}

	handleGoBack = () => {
		store.dispatch({ type: SET_TARGET_FIGHTERS, value: [] })
		this.props.history.goBack()
	}

	handleSelect = e => {
		this.setState({
			weightClass: e.currentTarget.value
		})
	}

	handleSearchInput = e => {
		let value = e.currentTarget.value.trim()
		if (value.match(replaceSpecialChar)) {
			value = value.replace(replaceSpecialChar, "")
		}
		this.setState({
			searchValue: value
		})
	}

	filteringFighters = fighters => {
		// select 값(state)으로 먼저 필터시키고
		if (!fighters.length) return
		this.filteredFighters = fighters.filter(fighter => {
			if (this.state.weightClass === "all") {
				return fighter
			} else {
				return fighter.weightClass === `${this.state.weightClass}`
			}
		})
		// input 값(state)으로 필터시키고
		if (this.state.searchValue.length > 0) {
			this.filteredFighters = this.filteredFighters.filter(fighter => {
				const reg = new RegExp(this.state.searchValue, "i")
				return fighter.name.match(reg)
			})
		}
		// 오름차순
		this.filteredFighters = this.filteredFighters.sort((a, b) => {
			return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
		})
	}

	render() {
		const { className, t, target, fighters } = this.props
		const { pathname } = this.props.location
		const { url } = this.props.match
		this.filteringFighters(fighters)

		return (
			<Container className={className}>
				<AppHelmet metaData="Fighter" />
				<section className="landing bg">
					{target.name ? (
						<Fragment>
							<p className="targetFighter aka" hidden={!target.aka.length}>
								"{target.aka}"
							</p>
							<h2 className="targetFighter title">{target.name}</h2>
							<button className="goBack" onClick={this.handleGoBack}>
								<Trans i18nKey="common.goBack" />
							</button>
						</Fragment>
					) : (
						<h2 className="title">
							<Trans i18nKey="pages.Fighter.h2" />
						</h2>
					)}
				</section>
				<section className="contentWrap">
					{pathname.includes("/fighter/profile") ? (
						<Route
							path={`${url}/profile/:fighter`}
							render={() => <FighterDetail fighters={fighters} />}
						/>
					) : (
						<Fragment>
							<div className="contentHeader">
								<span className="searchResultLength">
									{this.filteredFighters.length}명의 선수 검색됨
								</span>
								<select onChange={this.handleSelect} value={this.state.weightClass}>
									<option value="all" key="0">
										{t("common.weightClass.all")}
									</option>
									{weightClassConfig.map((weightClass, index) => {
										return (
											<option value={weightClass} key={index + 1}>
												{t(`common.weightClass.${weightClass}`)}
											</option>
										)
									})}
								</select>
								<div className="searchForm">
									<input
										type="text"
										placeholder={t("pages.Fighter.searchPlaceholder")}
										onChange={this.handleSearchInput}
										value={this.state.searchValue}
									/>
								</div>
							</div>
							<div className="contentBody">
								<ul className="fighterList">
									{this.filteredFighters.length ? (
										this.filteredFighters.map((fighter, index) => (
											<FighterList data={fighter} key={index} />
										))
									) : (
										<li>해당 조건의 선수가 없습니다</li>
									)}
								</ul>
							</div>
						</Fragment>
					)}
				</section>
			</Container>
		)
	}
}

const TransFighter = withTranslation()(Fighter)

const mapStateToProps = state => ({
	fighters: state.fighterReducer.fighters,
	target: state.fighterReducer.target
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransFighter))
