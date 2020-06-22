import React, { Component, Fragment } from "react"
import { withTranslation, Trans } from "react-i18next"
import { withRouter, Route } from "react-router-dom"
import { connect } from "react-redux"
import { Select } from "antd"

import store from "store"
import { SET_TARGET_FIGHTERS } from "store/actions/fighter"
import AppHelmet from "components/AppHelmet/AppHelmet"
import FighterList from "components/Fighter/FighterList"
import FighterDetail from "components/Fighter/FighterDetail"
import weightClassConfig from "config/weightClass"
import { replaceSpecialChar } from "assets/lib/regExp"
import StyledWrapper from "./FighterStyled"
import Layout from "components/Layout/Layout"
import langdingBg from "assets/img/background_fighters.jpg"

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

	handleSelectChange = value => {
		this.setState({
			weightClass: value
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
		const { Option } = Select
		this.filteringFighters(fighters)

		return (
			<StyledWrapper className={className}>
				<AppHelmet metaData="Fighter" />
				<Layout hasLanding={true}>
					<Layout.Landing
						backgroundImg={langdingBg}
						backgroundImgWidth="2000"
						backgroundImgHeight="1333">
						{target.name ? (
							<Fragment>
								<h2 className="targetFighter title">{target.name}</h2>
								<p className="targetFighter aka" hidden={!target.aka.length}>
									"{target.aka}"
								</p>
								<button className="goBack" onClick={this.handleGoBack}>
									<Trans i18nKey="common.goBack" />
								</button>
							</Fragment>
						) : (
							<h2 className="title">
								<Trans i18nKey="pages.Fighter.h2" />
							</h2>
						)}
					</Layout.Landing>
					<Layout.Content>
						{pathname.includes("/fighter/profile") ? (
							<Route
								path={`${url}/profile/:fighter`}
								render={() => <FighterDetail fighters={fighters} />}
							/>
						) : (
							<Fragment>
								<div className="contentHeader">
									<span className="searchResultLength">
										<Trans i18nKey={"pages.Fighter.playerFound"}>
											{String(this.filteredFighters.length)}
										</Trans>
									</span>
									<Select defaultValue={this.state.weightClass} onChange={this.handleSelectChange}>
										<Option value="all" key="0">
											{t("common.weightClass.all")}
										</Option>
										{weightClassConfig.map((weightClass, index) => {
											return (
												<Option value={weightClass} key={index + 1}>
													{t(`common.weightClass.${weightClass}`)}
												</Option>
											)
										})}
									</Select>
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
											<li>
												<Trans i18nKey={"pages.Fighter.notFound"} />
											</li>
										)}
									</ul>
								</div>
							</Fragment>
						)}
					</Layout.Content>
				</Layout>
			</StyledWrapper>
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
