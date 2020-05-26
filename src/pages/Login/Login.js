// todo : 로그인 된 상태에서 url로 접속할 수 있으니 -> 체크해서 mypage로 이동
// todo : 로그인 후 mypage로 이동
import React, { Component, createRef } from "react"
import store from "store"
import styled from "styled-components"
import { Link, withRouter, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { ACCESS_LOGIN } from "../../store/actions/auth"

import AppHelmet from "components/AppHelmet/AppHelmet"
import InputField from "components/Common/InputField"

const Container = styled.main`
	font-size: 2rem;

	.landing {
		padding-top: 200px;
		text-align: left;
		width: 980px;
		margin-left: auto;
		margin-right: auto;
		min-height: initial;
	}

	form {
		.passwordField {
			margin-top: 10px;
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
			alert("성공")
		} else {
			this.alert.current.hidden = false
			alert("실패")
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
					<h2>로그인</h2>
					<p ref={this.alert} className="alert" hidden>
						UFC 계정 또는 비밀번호가 유효하지 않습니다.
					</p>
					<form onSubmit={this.checkValidUser}>
						<div className="emailField">
							<InputField
								type="email"
								labelText="UFC 계정"
								name="email"
								onChange={this.handleInput}
							/>
						</div>
						<div className="passwordField">
							<InputField
								type="password"
								labelText="암호"
								name="password"
								onChange={this.handleInput}
							/>
						</div>
						<button ref={this.submit} type="submit" className="button login" disabled>
							로그인
						</button>
						<br />
						<Link to="/signup" className="signup">
							UFC 아이디가 없으신가요? 지금 생성하시고 원하는 UFC 이벤트 및 선수의 정보를 메일로
							받아보세요.
						</Link>
					</form>
					{/* <button onClick={this.handleLogin}>Login</button> */}
					<small>id: TEST_USER1@ufc.com | password: TEST1234! </small>
				</section>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
