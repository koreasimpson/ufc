import React, { Component } from "react"
import { NavLink, Route } from "react-router-dom"
import Ranking from "components/Fighter/Ranking"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"

import langdingBg from "assets/img/background_fighters.jpg"

const Container = styled.main`
	.landing {
		background-image: url(${langdingBg});
	}
	.contentWrap {
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
	}
`

class Fighter extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { className, t } = this.props
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
					<h2 className="title">
						<Trans i18nKey="pages.Fighter.h2" />
					</h2>
				</section>
				<section className="contentWrap">
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
					<ul>
						<li>
							<NavLink to={`${url}/all`}>
								<Trans i18nKey="common.weightClass.all" />
							</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/bantam`}>
								<Trans i18nKey="common.weightClass.bantam" />
							</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/feather`}>
								<Trans i18nKey="common.weightClass.feather" />
							</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/light`}>
								<Trans i18nKey="common.weightClass.light" />
							</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/welter`}>
								<Trans i18nKey="common.weightClass.welter" />
							</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/middle`}>
								<Trans i18nKey="common.weightClass.middle" />
							</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/lightheavy`}>
								<Trans i18nKey="common.weightClass.lightheavy" />
							</NavLink>
						</li>
						<li>
							<NavLink to={`${url}/heavy`}>
								<Trans i18nKey="common.weightClass.heavy" />
							</NavLink>
						</li>
					</ul>
					<div className="route">
						<Route path={`${url}/:weight`} component={Ranking} />
					</div>
				</section>
			</Container>
		)
	}
}

export default withTranslation()(Fighter)
