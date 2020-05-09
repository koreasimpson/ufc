import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

import store from "store"
import ufc from "assets/img/ufc.svg"

const Container = styled.nav`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};

	position: absolute;
	top: 50px;
	left: 50%;
	transform: translateX(-50%);
	width: 1024px;

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
		this.underlineElement = React.createRef()
	}

	handleMouseOver = e => {
		const left = e.target.offsetLeft
		const width = e.target.offsetWidth
		this.underlineElement.current.setAttribute("style", `width: ${width}px; left: ${left}px`)
	}

	render() {
		const { className } = this.props
		const { isAuth } = store.getState().authReducer
		console.log("gnb isAuth = ", isAuth)
		console.log("gnb isAuth = ", store.getState())
		return (
			<Container className={className}>
				<h1 className="logo noTextContent">
					<Link to="/" title="go to home" className="noTextContent">
						<img src={ufc} className="App__Logo" alt="UFC" />
					</Link>
				</h1>
				<ul className="gnb">
					<li onMouseOver={this.handleMouseOver}>
						<NavLink to="/event">이벤트</NavLink>
					</li>
					<li onMouseOver={this.handleMouseOver}>
						<NavLink to="/fighter">선수</NavLink>
					</li>
					<li onMouseOver={this.handleMouseOver}>
						<NavLink to="/article">기사 및 이미지</NavLink>
					</li>
					<li onMouseOver={this.handleMouseOver} className="align-right">
						<NavLink to="/live">Live</NavLink>
					</li>
					<li onMouseOver={this.handleMouseOver}>
						<NavLink to="/shop">Shop</NavLink>
					</li>
					<li onMouseOver={this.handleMouseOver}>
						<NavLink to="/support">Support</NavLink>
					</li>
					<li onMouseOver={this.handleMouseOver}>
						<NavLink to="/my">{isAuth ? "My" : "Login"}</NavLink>
					</li>
					<li className="hoverUnderline" ref={this.underlineElement}></li>
				</ul>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppGnb)
