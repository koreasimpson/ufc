import React, { Component, createRef } from "react"
import { connect } from "react-redux"
import { Link, NavLink, withRouter } from "react-router-dom"
import styled from "styled-components"
import throttle from "lodash.throttle"

import { ReactComponent as ufc } from "assets/img/ufc.svg"
import { withTranslation, Trans } from "react-i18next"
import { breakpoint, device } from "config/responsive"
import { ReactComponent as arrow } from "assets/img/arrow.svg"

const StyledLogo = styled(ufc)`
	fill: ${({ theme }) => theme.logoColor};
`

const StyledArrow = styled(arrow)`
	width: 1rem;
	height: 1rem;
	fill: ${({ theme }) => theme.textColor};
	vertical-align: middle;
	margin-left: 10px;
	transform: rotate(90deg);
`

const Container = styled.nav`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	width: 1024px;
	transition: width 1s;

	&.fixed {
		z-index: 100;
		position: fixed;
		top: 0px;
		width: 100vw;
		box-shadow: 0 -5px 10px 0px #000;

		.gnb .underline {
			width: 100%;
		}
	}

	&.shadow {
		box-shadow: 0 0px 10px 0px #000;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		svg {
			display: inline-block;
			width: 80px;
			height: auto;
		}
	}

	.gnb {
		display: flex;

		li {
			&.align-right {
				margin-left: auto;
			}

			&.underline {
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				width: 0px;
				height: 2px;
				border-bottom: 4px solid #cc0b0b;
				padding: 0;
				transition: all 1s ease-in-out;
			}

			a {
				padding: 1rem;
				display: inline-block;
			}
			a.active {
				color: #cc0b0b;
			}
		}
	}

	.toggleGnb {
		display: none;
	}

	@media screen and ${device.laptop} {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
	}
	@media screen and ${device.mobileTabletOnly} {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		width: 100%;

		.logo {
			position: static;
			transform: none;
		}
		.gnb {
			display: none;
			&.is-show {
				position: absolute;
				display: block;
				width: 100%;
				top: 67px;
				height: calc(100vh - 67px);
				left: 0;
				z-index: 1;
				background-color: ${({ theme }) => theme.bgColor};
			}

			a {
				width: 100%;
				height: 100%;
				&:hover {
					background-color: #eee;
				}
			}
		}
		.toggleGnb {
			display: block;
		}
	}
`

class AppGnb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFixed: false
		}
		this.gnb = createRef()
		this.gnbList = ["event", "fighter", "ranking", "live", "shop", "support", "my"]
		this.hasLandingContent = true
		this.detectScrollThrottled = throttle(this.detectScroll, 100)
		window.addEventListener("scroll", this.detectScrollThrottled)
	}

	detectScroll = () => {
		if (window.scrollY > 50 && !this.state.isFixed && window.innerWidth > breakpoint.laptop) {
			this.setState({ isFixed: true })
		} else if (
			window.scrollY <= 50 &&
			this.state.isFixed &&
			window.innerWidth > breakpoint.laptop
		) {
			this.setState({ isFixed: false })
		}
	}

	toggleGnb = e => {
		if (this.gnb.current.classList.contains("is-show")) {
			this.gnb.current.classList.remove("is-show")
		} else {
			this.gnb.current.classList.add("is-show")
		}
	}

	handleLink = (e, gnb) => {
		if (gnb === "live" || gnb === "shop" || gnb === "support") {
			e.preventDefault()
			alert(this.props.t("common.commingSoon"))
			return
		}
		this.gnb.current.classList.remove("is-show")
	}

	componentWillUnmount() {
		this.detectScrollThrottled.cancel()
	}

	render() {
		const { className, location, isAuth } = this.props
		if (!(location.pathname === "/event" || location.pathname === "/fighter")) {
			this.hasLandingContent = false
		} else {
			this.hasLandingContent = true
		}
		return (
			<Container
				className={`${className}
				${this.state.isFixed ? "fixed" : null}
				${this.hasLandingContent ? null : "shadow"}
			`}>
				<h1 className="logo noTextContent">
					<Link to="/" title="go to home" className="noTextContent">
						<StyledLogo />
					</Link>
				</h1>
				<button className="toggleGnb" onClick={this.toggleGnb}>
					Menu
					<StyledArrow />
				</button>
				<ul ref={this.gnb} className="gnb" onMouseLeave={this.handleMouseLeave}>
					{this.gnbList.map((gnb, index) => {
						return (
							<li key={index} className={gnb === "live" ? "align-right" : null}>
								<NavLink to={`/${gnb}`} onClick={e => this.handleLink(e, gnb)}>
									{gnb !== "my" ? (
										<Trans i18nKey={`components.AppGnb.list.${gnb}`} />
									) : isAuth ? (
										<Trans i18nKey="components.AppGnb.list.my" />
									) : (
										<Trans i18nKey="components.AppGnb.list.login" />
									)}
								</NavLink>
							</li>
						)
					})}
					<li className="underline"></li>
				</ul>
			</Container>
		)
	}
}

const TransAppGnb = withTranslation()(AppGnb)

const mapStateToProps = state => ({
	isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransAppGnb))
