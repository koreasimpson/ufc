import React, { Component } from "react"
import { connect } from "react-redux"
import { withTranslation, Trans } from "react-i18next"

import StyledWrapper, { StyledLogo } from "./AppFooterStyled"

class AppFooter extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	changeLanguage = e => {
		const options = Array.from(e.target.children)
		let selectedOptions = options.filter(option => option.selected)
		selectedOptions = selectedOptions[0].value
		this.props.i18n.changeLanguage(selectedOptions)
	}

	render() {
		const { className } = this.props

		return (
			<StyledWrapper className={className}>
				<div className="content left">
					<h1>
						<StyledLogo />
					</h1>
					<select id="languageOptions" onChange={this.changeLanguage}>
						<option value="ko">Korea</option>
						<option value="en">English</option>
					</select>
				</div>
				<div className="content footer-navigation right">
					<dl>
						<dt>
							<Trans i18nKey={"components.AppFooter.footerNavigation.ufc"} />
						</dt>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.theSport"} />
						</dd>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.community"} />
						</dd>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.hire"} />
						</dd>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.store"} />
						</dd>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.press"} />
						</dd>
					</dl>
					<dl>
						<dt>
							<Trans i18nKey={"components.AppFooter.footerNavigation.help"} />
						</dt>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.fightpass"} />
						</dd>
					</dl>
					<dl>
						<dt>
							<Trans i18nKey={"components.AppFooter.footerNavigation.raw"} />
						</dt>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.article"} />
						</dd>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.privacy"} />
						</dd>
						<dd>
							<Trans i18nKey={"components.AppFooter.footerNavigation.ad"} />
						</dd>
					</dl>
				</div>
				<p className="copyright">
					<small>
						<Trans i18nKey={"components.AppFooter.copyright"} />
					</small>
				</p>
			</StyledWrapper>
		)
	}
}

const TransAppFooter = withTranslation()(AppFooter)

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransAppFooter)
