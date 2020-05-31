import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { ReactComponent as ufc } from "assets/img/ufc.svg"
import { withTranslation, Trans } from "react-i18next"
import { device } from "config/responsive"

const StyledLogo = styled(ufc)`
	fill: ${({ theme }) => theme.logoColor};
`

const Container = styled.footer`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	border-top: 5px solid ${({ theme }) => theme.majorColor};
	padding: 5em 2em;
	display: flex;
	justify-content: space-between;
	position: relative;

	h1 {
		display: inline-block;
		margin: 0;
		svg {
			height: 2em;
			width: 5em;
		}
	}

	#languageOptions {
		vertical-align: bottom;
		margin-left: 2em;
	}

	.footer-navigation {
		display: flex;
		width: 399px;
		justify-content: space-evenly;
		dl {
			flex: 1;
			dt {
				font-size: 2em;
			}
			dd {
				margin-top: 1em;
			}
		}
	}

	.copyright {
		position: absolute;
		left: 2em;
		bottom: 5em;
	}

	@media screen and ${device.mobileOnly} {
		#languageOptions {
			display: block;
			margin-left: 0;
			margin-top: 1rem;
			margin-right: 2em;
		}
		.footer-navigation dl {
			text-align: center;
		}
	}
`

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
			<Container className={className}>
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
			</Container>
		)
	}
}

const TransAppFooter = withTranslation()(AppFooter)

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransAppFooter)
