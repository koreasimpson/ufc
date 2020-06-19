import React, { Component, createRef } from "react"
import { connect } from "react-redux"
import { Link, NavLink, withRouter } from "react-router-dom"
import { withTranslation, Trans } from "react-i18next"
import throttle from "lodash.throttle"
import { withCookies } from "react-cookie"
import { notification } from "antd"

import store from "store"
import { breakpoint } from "config/responsive"
import { SET_THEME_LIGHT, SET_THEME_DARK } from "store/actions/theme"
import Wrapper, { StyledLogo, StyledArrow } from "./AppGnbStyled"
import { ACCESS_LOGOUT } from "store/actions/auth"

class AppGnb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFixed: false
		}
		this.gnb = createRef()
		this.accountMenuList = createRef()
		this.gnbList = ["event", "fighter", "ranking", "live", "shop", "support"]
		this.hasLandingContent = true
		this.detectScrollThrottled = throttle(this.detectScroll, 100)
		this.detectResizeThrottled = throttle(this.detectResize, 100)
		this.cookies = props.cookies

		window.addEventListener("scroll", this.detectScrollThrottled)
		window.addEventListener("resize", this.detectResizeThrottled)
		window.addEventListener("click", this.hideAccountMenuItem)
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

	detectResize = () => {
		if (window.innerWidth < breakpoint.laptop && this.state.isFixed) {
			this.setState({ isFixed: false })
		}
	}

	toggleGnb = e => {
		if (this.gnb.current.classList.contains("is-show")) {
			this.gnb.current.classList.remove("is-show")
			document.querySelector("body").style.overflowY = "auto"
		} else {
			this.gnb.current.classList.add("is-show")
			document.querySelector("body").style.overflowY = "hidden"
		}
	}

	handleLink = (e, gnb = "") => {
		if (gnb === "live" || gnb === "shop" || gnb === "support") {
			e.preventDefault()
			notification.info({
				message: this.props.t("common.commingSoon"),
				placement: "topRight"
			})
			return
		}
		this.gnb.current.classList.remove("is-show")
		document.querySelector("body").style.overflowY = "auto"
	}

	onLogOut = () => {
		store.dispatch({ type: ACCESS_LOGOUT })
	}

	handleAccountMenuItem = e => {
		e.preventDefault()
		e.stopPropagation()
		this.accountMenuList.current.hidden = !this.accountMenuList.current.hidden
	}

	hideAccountMenuItem = () => {
		this.accountMenuList.current.hidden = true
	}

	toggleTheme = () => {
		const dayTime = 86400000
		let expireDate = new Date()
		expireDate.setTime(expireDate.getTime() + 7 * dayTime)
		if (this.props.theme === "light") {
			store.dispatch({ type: SET_THEME_DARK })
			this.cookies.set("nzcUfcTheme", "dark", { path: "/", expires: expireDate })
		} else {
			store.dispatch({ type: SET_THEME_LIGHT })
			this.cookies.set("nzcUfcTheme", "light", { path: "/", expires: expireDate })
		}
	}

	componentWillUnmount() {
		this.detectScrollThrottled.cancel()
		this.detectResizeThrottled.cancel()
		window.removeEventListener("click", this.hideAccountMenuItem)
	}

	render() {
		const { className, location, isAuth, theme } = this.props
		if (!(location.pathname === "/event" || location.pathname === "/fighter")) {
			this.hasLandingContent = false
		} else {
			this.hasLandingContent = true
		}
		return (
			<Wrapper
				className={`${className}
				${this.state.isFixed ? "fixed" : null}
				${this.hasLandingContent ? null : "shadow"}
			`}>
				<h1 className="logo noTextContent">
					<Link
						to="/"
						title="go to home"
						className="noTextContent"
						onClick={e => this.handleLink(e)}>
						<StyledLogo />
					</Link>
				</h1>
				<button className="toggleGnb mobileTabletOnly" onClick={this.toggleGnb}>
					Menu
					<StyledArrow />
				</button>
				<ul ref={this.gnb} className="gnb" onMouseLeave={this.handleMouseLeave}>
					{this.gnbList.map((gnb, index) => {
						return (
							<li key={index} className={gnb === "live" ? "align-right" : null}>
								<NavLink to={`/${gnb}`} onClick={e => this.handleLink(e, gnb)}>
									<Trans i18nKey={`components.AppGnb.list.${gnb}`} />
								</NavLink>
							</li>
						)
					})}
					<li className="account">
						<a href="/" onClick={this.handleAccountMenuItem}>
							<Trans i18nKey={"common.account"} />
						</a>
						<ul ref={this.accountMenuList} className="depth2" hidden>
							<li>
								{isAuth ? (
									<button className="button logout" onClick={this.onLogOut}>
										<Trans i18nKey={"common.logOut"} />
									</button>
								) : (
									<NavLink to="/login" onClick={e => this.handleLink(e)}>
										<Trans i18nKey={"common.logIn"} />
									</NavLink>
								)}
							</li>
							<li>
								{isAuth ? (
									<NavLink to="/my" onClick={e => this.handleLink(e)}>
										<Trans i18nKey={"common.myInfo"} />
									</NavLink>
								) : (
									<NavLink to="/signup" onClick={e => this.handleLink(e)}>
										<Trans i18nKey={"common.signUp"} />
									</NavLink>
								)}
							</li>
							<li>
								<button className={`toggle ${theme}`} onClick={this.toggleTheme}>
									<i className="circle"></i>
									{theme === "light" ? "☼" : "☾"}
								</button>
							</li>
						</ul>
					</li>
					<li className="underline"></li>
				</ul>
			</Wrapper>
		)
	}
}

const TransAppGnb = withTranslation()(withCookies(AppGnb))

const mapStateToProps = state => ({
	isAuth: state.authReducer.isAuth,
	theme: state.themeReducer.theme
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransAppGnb))
