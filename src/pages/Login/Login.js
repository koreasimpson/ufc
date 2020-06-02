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
	form {
		position: relative;
		display: inline-block;

		& [class*="Field"] {
			width: 100%;
		}

		button {
			margin-top: 20px;
			width: 300px;
			background-color: ${({ theme }) => theme.majorColor};
			color: #fff;
			border-radius: 12px;
			padding: 15px 0;
			box-sizing: border-box;
			font-size: 2rem;
			font-family: inherit;
		}

		.loginAlert {
			position: absolute;
			top: -3rem;
			left: 50%;
			transform: translateX(-50%);
			font-size: 2rem;
			padding-bottom: 20px;
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
		this.loginAlert = createRef()
		this.email = ""
		this.emailValidation = ""
		this.password = ""
		this.passwordValidation = ""
		this.validUser = "null"
	}

	handleInput = (value, name, isPassed) => {
		this[name] = value
		this[`${name}Validation`] = isPassed
	}

	checkValidUser = e => {
		e.preventDefault()
		this.validUser = "invalid"

		if (!(this.emailValidation === "pass" && this.passwordValidation === "pass")) {
			alert("입력필드를 모두 입력해주세요")
			return
		}

		if (this.email.length) {
			import("assets/dummyData/user.json")
				.then(({ default: userList }) => {
					for (let i = 0; i < userList.length; i++) {
						const { email, password } = userList[i]
						if (this.email === email && this.password === password) {
							this.validUser = "pass"
							break
						}
					}
				})
				.then(() => {
					this.handleSubmit()
				})
				.catch(error => {
					console.log("error = ", error)
				})
		}
	}

	handleSubmit = e => {
		if (!(this.emailValidation === "pass" && this.passwordValidation === "pass")) return false
		if (this.validUser === "pass") {
			store.dispatch({ type: ACCESS_LOGIN })
			this.props.history.push("/")
			// const wantedPath = this.props.to.state.from.pathname
			// wantedPath ? this.props.history.push(wantedPath) : this.props.history.push("/")
		} else {
			this.loginAlert.current.hidden = false
		}
	}

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
						<p ref={this.loginAlert} className="loginAlert" hidden>
							<Trans i18nKey="pages.Login.validation" />
						</p>
						<div className="emailField">
							<InputField
								type="text"
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
						<button type="submit" className="button login">
							<Trans i18nKey="pages.Login.h2" />
						</button>
						<br />
						<Link to="/signup" className="signup">
							<Trans i18nKey="pages.Login.notAccount" />
						</Link>
					</form>
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
