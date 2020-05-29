// todo : 로그인 된 상태에서 url로 접속할 수 있으니 -> 체크해서 mypage로 이동
// todo : 로그인 후 mypage로 이동
import React, { Component, createRef } from "react"
import store from "store"
import styled from "styled-components"
import { Link, withRouter, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { withTranslation, Trans } from "react-i18next"

import { ACCESS_LOGIN } from "../../store/actions/auth"

import AppHelmet from "components/AppHelmet/AppHelmet"
import InputField from "components/Common/InputField"

const Container = styled.main`
	font-size: 2rem;

	form {
		display: inline-block;
		& [class*="Field"] {
			width: 100%;
		}

		button {
			margin-top: 20px;
			width: 300px;
			background-color: ${({ theme }) => theme.majorColor};
			border-radius: 12px;
			padding: 15px 0;
			box-sizing: border-box;
			color: ${({ theme }) => theme.textColorInvert};
			font-size: 2rem;
			font-family: inherit;
		}
	}

	.signup {
		font-size: 1rem;
		text-decoration: underline;
	}
`

class Login extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.submit = createRef()
		this.alert = createRef()
		this.email = ""
		this.emailValidation = ""
		this.password = ""
		this.passwordValidation = ""
		this.validUser = "null"
	}

	handleInput = (value, name, isPassed) => {
		this[name] = value
		this[`${name}Validation`] = isPassed
		if (this.emailValidation === "pass" && this.passwordValidation === "pass") {
			this.submit.current.disabled = false
		} else {
			this.submit.current.disabled = true
		}
	}

	checkValidUser = e => {
		e.preventDefault()
		const inputEmail = this.email
		const inputPassword = this.password

		this.validUser = "invalid"

		import("assets/dummyData/user.json")
			.then(({ default: userList }) => {
				for (let i = 0; i < userList.length; i++) {
					const { email, password } = userList[i]
					if (inputEmail === email) {
						if (inputPassword === password) {
							this.validUser = "pass"
						}
						break
					}
				}
			})
			.then(() => {
				this.handleSubmit()
			})
			.catch(error => {
				console.error("error = ", error)
			})
	}

	handleSubmit = e => {
		if (!(this.emailValidation === "pass" && this.passwordValidation === "pass")) return false
		if (this.validUser === "pass") {
			store.dispatch({ type: ACCESS_LOGIN })
			alert(this.props.t("common.success"))
		} else {
			this.alert.current.hidden = false
			alert(this.props.t("common.fail"))
		}
	}

	// handleLogin = () => {
	// 	store.dispatch({ type: ACCESS_LOGIN })
	// 	const wantedPath = this.props.to.state.from.pathname
	// 	this.props.history.push(wantedPath)
	// }

	render() {
		const { className } = this.props
		return this.props.isAuth ? (
			<Redirect to="/my/" />
		) : (
			<Container className={className}>
				<AppHelmet />
				<section className="contentWrap">
					<h2>
						<Trans i18nKey="pages.Login.h2" />
					</h2>
					<form onSubmit={this.checkValidUser}>
						<p ref={this.alert} className="alert" hidden>
							<Trans i18nKey="pages.Login.validation" />
						</p>
						<div className="emailField">
							<InputField
								type="email"
								labelText="account"
								name="email"
								onChange={this.handleInput}
							/>
						</div>
						<div className="passwordField">
							<InputField
								type="password"
								labelText="password"
								name="password"
								onChange={this.handleInput}
							/>
						</div>
						<button ref={this.submit} type="submit" className="button login" disabled>
							<Trans i18nKey="pages.Login.h2" />
						</button>
						<br />
						<Link to="/signup" className="signup">
							<Trans i18nKey="pages.Login.notAccount" />
						</Link>
					</form>
					{/* <button onClick={this.handleLogin}>Login</button> */}
					<p>
						<small>id: TEST_USER1@ufc.com | password: TEST1234! </small>
					</p>
				</section>
			</Container>
		)
	}
}

const TransLogin = withTranslation()(Login)

const mapStateToProps = state => ({
	isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransLogin))
