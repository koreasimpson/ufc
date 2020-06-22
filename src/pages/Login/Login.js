import React, { Component } from "react"
import { Link, withRouter, Redirect } from "react-router-dom"
import { withTranslation, Trans } from "react-i18next"
import { message, Alert } from "antd"

import store from "store"
import { ACCESS_LOGIN } from "store/actions/auth"
import Layout from "components/Layout/Layout"
import AppHelmet from "components/AppHelmet/AppHelmet"
import InputField from "components/Common/InputField"
import { fetchUsers } from "assets/lib/fetch"
import StyledWrapper from "./LoginStyled"

class Login extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	state = {
		val: {
			account: "",
			password: ""
		},
		error: {
			account: false,
			password: false
		},
		errorText: {
			account: "",
			password: ""
		}
	}

	getInputValue = (name, value) => {
		this.setState({
			...this.state,
			val: {
				...this.state.val,
				[name]: value
			}
		})
	}

	checkInputError = (name, value) => {
		let error = false
		let errorText = ""
		let labelText = this.props.t(`components.InputField.labelText.${name}`)
		if (!value.length) {
			error = true
			errorText = this.props.t("components.InputField.validation.empty", { labelText })
		}
		this.setState({
			...this.state,
			error: {
				...this.state.error,
				[name]: error
			},
			errorText: {
				...this.state.errorText,
				[name]: errorText
			}
		})
	}

	checkValidUser = async () => {
		const userData = await fetchUsers()
		let result = false
		for (let i = 0; i < userData.length; i++) {
			const { account, password, uid } = userData[i]
			if (this.state.val.account === account && this.state.val.password === password) {
				result = true
				this.setAuthToLocalstorage(uid)
				break
			}
		}
		return result
	}

	setAuthToLocalstorage = uid => {
		const today = new Date()
		const timeStamp = today.getTime()
		const expireTime = timeStamp + 1000 * 60 * 10
		const data = {
			expireTime,
			uid
		}
		localStorage.setItem("nzcUfcAuth", JSON.stringify(data))
	}

	handleSubmit = async e => {
		e.preventDefault()
		const result = await this.checkValidUser()
		if (result) {
			message.success(this.props.t("pages.Login.success"))
			store.dispatch({ type: ACCESS_LOGIN })
			if (this.props.location.state) {
				const wantedPath = this.props.location.state.from.pathname
				this.props.history.push(wantedPath)
			} else {
				this.props.history.push("/")
			}
		} else {
			const alertElement = document.querySelector(".ant-alert")
			alertElement.style.display = "block"
			setTimeout(() => {
				alertElement.style.display = "none"
			}, 5000)
		}
	}

	render() {
		const { className, t } = this.props
		const isAuth = store.getState().authReducer.isAuth

		return isAuth ? (
			<Redirect to="/my/" />
		) : (
			<StyledWrapper className={className}>
				<AppHelmet />
				<Layout>
					<Layout.Content>
						<h2 className="title">
							<Trans i18nKey="pages.Login.h2" />
						</h2>
						<form onSubmit={this.handleSubmit}>
							<Alert
								message={t("pages.Login.validation.title")}
								description={t("pages.Login.validation.desc")}
								type="error"
								showIcon
							/>
							<InputField
								labelText="account"
								type="text"
								name="account"
								value={this.state.val.account || ""}
								error={this.state.error.account || ""}
								errorText={this.state.errorText.account || ""}
								handleChange={this.getInputValue}
								handleBlur={this.checkInputError}
							/>
							<InputField
								labelText="password"
								type="password"
								name="password"
								value={this.state.val.password || ""}
								error={this.state.error.password || ""}
								errorText={this.state.errorText.password || ""}
								handleChange={this.getInputValue}
								handleBlur={this.checkInputError}
							/>
							<button
								type="submit"
								className="button login"
								disabled={!(this.state.val.account && this.state.val.password)}>
								<Trans i18nKey="pages.Login.h2" />
							</button>
							<br />
							<Link to="/signup" className="signup">
								<Trans i18nKey="pages.Login.notAccount" />
							</Link>
						</form>
						<p className="testAccount">
							<small>
								account: 90chanho@gmail.com <br /> password: test1234!{" "}
							</small>
						</p>
					</Layout.Content>
				</Layout>
			</StyledWrapper>
		)
	}
}

const TransLogin = withTranslation()(Login)

export default withRouter(TransLogin)
