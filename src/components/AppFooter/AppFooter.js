import React, { Component } from "react"
import { connect } from "react-redux"
import { withTranslation, Trans } from "react-i18next"
import { withCookies } from "react-cookie"
import { Select } from "antd"

import StyledWrapper, { StyledLogo } from "./AppFooterStyled"

class AppFooter extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.cookies = props.cookies
	}

	handleSelectChange = value => {
		this.props.i18n.changeLanguage(value)
		this.setLangCookie(value)
	}

	setLangCookie = lang => {
		const dayTime = 86400000
		let expireDate = new Date()
		expireDate.setTime(expireDate.getTime() + 7 * dayTime)
		this.cookies.set("nzcUfcLang", lang, { path: "/", expires: expireDate })
	}

	render() {
		const { className } = this.props
		const { Option } = Select

		return (
			<StyledWrapper className={className}>
				<div className="content left">
					<h2>
						<StyledLogo />
					</h2>
					<Select defaultValue={this.props.i18n.language} onChange={this.handleSelectChange}>
						<Option value="ko" label="Korea">
							<div className="demo-option-label-item">Korea</div>
						</Option>
						<Option value="en" label="English">
							<div className="demo-option-label-item">USA</div>
						</Option>
					</Select>
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

const TransAppFooter = withTranslation()(withCookies(AppFooter))

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransAppFooter)
