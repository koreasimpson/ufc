import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import store from "store"
import { ReactComponent as ufc } from "assets/img/ufc.svg"
import { SET_LANGUAGE_KO, SET_LANGUAGE_EN, SET_LANGUAGE_JA } from "../../store/actions/lang"

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
`

class AppFooter extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	handleLanguageOptions = e => {
		const options = Array.from(e.target.children)
		let selectedOptions = options.filter(option => option.selected)
		selectedOptions = selectedOptions[0].value
		const selectedOptionsValue =
			selectedOptions === "ko"
				? SET_LANGUAGE_KO
				: selectedOptions === "en"
				? SET_LANGUAGE_EN
				: SET_LANGUAGE_JA
		store.dispatch({ type: selectedOptionsValue })
	}

	render() {
		const { lang, className } = this.props
		return (
			<Container className={className}>
				<div className="content left">
					<h1>
						<StyledLogo />
					</h1>
					<select id="languageOptions" defaultValue={lang} onChange={this.handleLanguageOptions}>
						<option value="ko">Korea</option>
						<option value="en">English</option>
						<option value="ja">Japan</option>
					</select>
				</div>
				<div className="content footer-navigation right">
					<dl>
						<dt>UFC</dt>
						<dd>the sport</dd>
						<dd>community</dd>
						<dd>채용정보</dd>
						<dd>채용 정보</dd>
						<dd>store</dd>
						<dd>press credentials</dd>
					</dl>
					<dl>
						<dt>HELP</dt>
						<dd>fight pass faq</dd>
					</dl>
					<dl>
						<dt>법</dt>
						<dd>조항</dd>
						<dd>개인정보</dd>
						<dd>Ad choices</dd>
					</dl>
				</div>
				<p className="copyright">
					<small>저작권 © all-time 구공찬</small>
				</p>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	lang: state.langReducer.lang
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter)
