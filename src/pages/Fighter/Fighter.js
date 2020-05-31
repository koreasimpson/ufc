import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"
import { withRouter, Route } from "react-router-dom"
import { connect } from "react-redux"

import langdingBg from "assets/img/background_fighters.jpg"
import AppHelmet from "components/AppHelmet/AppHelmet"
import FighterList from "components/Fighter/FighterList"
import FighterDetail from "components/Fighter/FighterDetail"
import store from "store"
import { SET_TARGET_FIGHTERS } from "store/actions/fighter"

const Container = styled.main`
	.landing {
		background-image: url(${langdingBg});
	}
	.contentWrap {
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
	}
	.goBack {
		padding: 15px 35px;
		transform: translateY(8rem);
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.majorColor};
	}
`

class Fighter extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	handleGoBack = () => {
		store.dispatch({ type: SET_TARGET_FIGHTERS, value: [] })
		this.props.history.goBack()
	}

	render() {
		const { className, t, fighters, target } = this.props
		const { pathname } = this.props.location
		const { url } = this.props.match
		const pageMetaData = {
			title: t("meta.Fighter.title"),
			description: t("meta.Fighter.description"),
			keywords: t("meta.Fighter.keywords"),
			ogTitle: t("meta.Fighter.ogTitle"),
			ogDescription: t("meta.Fighter.ogDescription"),
			twitterTitle: t("meta.Fighter.twitterTitle")
		}
		return (
			<Container className={className}>
				<AppHelmet pageData={pageMetaData} />
				<section className="landing bg">
					{target.name ? (
						<Fragment>
							<p>{target.aka}</p>
							<h2 className="title">{target.name}</h2>
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
								<select name="" id="">
									<option value="all">{t("common.weightClass.all")}</option>
									<option value="bantam">{t("common.weightClass.bantam")}</option>
									<option value="feather">{t("common.weightClass.feather")}</option>
									<option value="light">{t("common.weightClass.light")}</option>
									<option value="welter">{t("common.weightClass.welter")}</option>
									<option value="middle">{t("common.weightClass.middle")}</option>
									<option value="lightheavy">{t("common.weightClass.lightheavy")}</option>
									<option value="heavy">{t("common.weightClass.heavy")}</option>
								</select>
							</div>
							<div className="contentBody">
								<div className="searchForm">
									<span></span>
									<input type="text" placeholder={t("pages.Fighter.searchPlaceholder")} />
								</div>
								<ul>
									{fighters.map((fighter, index) => (
										<FighterList data={fighter} key={index} />
									))}
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
