import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

import store from "store"
import ufc from "assets/img/ufc.svg"
import language from "assets/language/language.json"

const Container = styled.nav`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};

	position: absolute;
	top: 50px;
	left: 50%;
	transform: translateX(-50%);
	width: 1024px;
	transition: width 1s;

	&.fixed {
		position: fixed;
		top: 0px;
		width: 100vw;
		min-width: 1024px;
		box-shadow: 0 -5px 10px 0px #000;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		img {
			display: inline-block;
			width: 80px;
			height: auto;
		}
	}

	.gnb {
		display: flex;

		li {
			padding: 1rem;

			&.align-right {
				margin-left: auto;
			}

			&.hoverUnderline {
				position: absolute;
				bottom: 0;
				width: 0px;
				height: 2px;
				border-bottom: 4px solid #cc0b0b;
				padding: 0;
				transition: all 0.3s ease-in-out;
			}

			a.active {
				color: #cc0b0b;
			}
		}
	}
`

class AppGnb extends Component {
	constructor(props) {
		super(props)
		this.nav = React.createRef()
		this.underlineElement = React.createRef()
		this.state = {
			isFixed: false
		}
		window.addEventListener("scroll", e => {
			if (window.scrollY > 50 && !this.state.isFixed) {
				const target = e.target.querySelector("nav a.active")
				this.setState({ isFixed: true })
				this.handleMouseOver(e, target)
			} else if (window.scrollY <= 50 && this.state.isFixed) {
				const target = e.target.querySelector("nav a.active")
				this.setState({ isFixed: false })
				this.handleMouseOver(e, target)
			}
		})
	}

	setUnderLine = (width, left) => {
		this.underlineElement.current.setAttribute("style", `width: ${width}px; left: ${left}px`)
	}

	handleMouseOver = (e, target) => {
		let left, width
		if (target) {
			left = target.offsetLeft
			width = target.offsetWidth
			this.setUnderLine(width, left)
		} else {
			console.log("no target")
			left = e.target.offsetLeft
			width = e.target.offsetWidth
			this.setUnderLine(width, left)
		}
	}

	handleMouseLeave = e => {
		const target = e.currentTarget.querySelector("a.active")
		this.handleMouseOver(e, target)
	}

	render() {
		const { className } = this.props
		const { isAuth } = store.getState().authReducer
		const { lang } = store.getState().langReducer
		const languageText = language.appGnb
		return (
			<Container className={(className, this.state.isFixed ? "fixed" : null)} ref={this.nav}>
				<h1 className="logo noTextContent">
					<Link to="/" title="go to home" className="noTextContent">
						<img src={ufc} className="App__Logo" alt="UFC" />
					</Link>
				</h1>
				<ul className="gnb" onMouseLeave={this.handleMouseLeave}>
					<li>
						<NavLink to="/event" onMouseOver={this.handleMouseOver}>
							{languageText.list.event[lang]}
						</NavLink>
					</li>
					<li>
						<NavLink to="/fighter" onMouseOver={this.handleMouseOver}>
							선수
						</NavLink>
					</li>
					<li>
						<NavLink to="/article" onMouseOver={this.handleMouseOver}>
							기사 및 이미지
						</NavLink>
					</li>
					<li className="align-right">
						<NavLink to="/live" onMouseOver={this.handleMouseOver}>
							Live
						</NavLink>
					</li>
					<li>
						<NavLink to="/shop" onMouseOver={this.handleMouseOver}>
							Shop
						</NavLink>
					</li>
					<li>
						<NavLink to="/support" onMouseOver={this.handleMouseOver}>
							Support
						</NavLink>
					</li>
					<li>
						<NavLink to="/my" onMouseOver={this.handleMouseOver}>
							{" "}
							{isAuth ? "My" : "Login"}
						</NavLink>
					</li>
					<li className="hoverUnderline" ref={this.underlineElement}></li>
				</ul>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	isAuth: state.authReducer.isAuth,
	lang: state.langReducer.lang
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppGnb)
