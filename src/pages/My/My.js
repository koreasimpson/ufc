import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import { withTranslation, Trans } from "react-i18next"

import InputField from "components/Common/InputField"
import { fetchUsers } from "assets/lib/fetch"
import StyledWrapper from "./MyStyled"
import { expEmail, expPhone } from "assets/lib/regExp"

class My extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.getUserData()
	}

	state = {
		editMode: false,
		userData: {},
		val: {
			familyName: "",
			firstName: "",
			email: "",
			phone: ""
		},
		error: {
			familyName: false,
			firstName: false,
			email: false,
			phone: false
		},
		errorText: {
			familyName: "",
			firstName: "",
			email: "",
			phone: ""
		}
	}

	getUserData = async () => {
		const authUid = JSON.parse(window.localStorage.getItem("nzcUfcAuth")).uid
		const userData = await fetchUsers()
		for (let i = 0; i < userData.length; i++) {
			if (userData[i].uid === authUid) {
				this.setState({
					...this.state,
					userData: userData[i],
					val: {
						familyName: userData[i].familyName,
						firstName: userData[i].firstName,
						email: userData[i].email,
						phone: userData[i].phone
					}
				})
				break
			}
		}
	}

	onEditMode = e => {
		e.preventDefault()
		this.setState({
			editMode: true
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const isAllPass = this.isAllPass()
		if (isAllPass) {
			this.setState({
				editMode: false
			})
		} else {
			alert("양식에 맞게 모두 입력해주세요")
		}
	}

	getInputValue = (name, value) => {
		if (name === "phone") value = value.replace(expPhone, "")
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
		} else if (name === "email") {
			const emailTestResult = expEmail.test(value)
			if (!emailTestResult) {
				error = true
				errorText = this.props.t("components.InputField.validation.emailForm")
			}
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

	isAllPass = () => {
		let isAllPass = true
		for (let key in this.state.error) {
			if (this.state.error[key] !== false) isAllPass = false
		}
		return isAllPass
	}

	render() {
		const { className } = this.props
		const { val, error, errorText } = this.state

		return (
			<StyledWrapper className={className}>
				<AppHelmet />
				<section className="contentWrap">
					<h2>
						<Trans i18nKey="pages.My.h2" />
					</h2>
					<p>
						반갑습니다 `{this.state.val.familyName} {this.state.val.firstName}`님.
					</p>
					<form action="">
						<fieldset disabled={!this.state.editMode}>
							<legend>계정 정보</legend>
							<InputField
								labelText="account"
								type="text"
								name="account"
								readOnly="readonly"
								value={this.state.userData.account || ""}
							/>
						</fieldset>
						<fieldset disabled={!this.state.editMode}>
							<legend>신상 정보</legend>
							<div className="fieldWrapper">
								<InputField
									labelText="familyName"
									type="text"
									name="familyName"
									value={val.familyName}
									error={error.familyName}
									errorText={errorText.familyName}
									handleChange={this.getInputValue}
									handleBlur={this.checkInputError}
								/>
								<InputField
									labelText="firstName"
									type="text"
									name="firstName"
									value={val.firstName}
									error={error.firstName}
									errorText={errorText.firstName}
									handleChange={this.getInputValue}
									handleBlur={this.checkInputError}
								/>
							</div>
							<InputField
								labelText="email"
								type="text"
								name="email"
								value={val.email}
								error={error.email}
								errorText={errorText.email}
								handleChange={this.getInputValue}
								handleBlur={this.checkInputError}
							/>
							<InputField
								labelText="phone"
								type="text"
								name="phone"
								value={val.phone}
								error={error.phone}
								errorText={errorText.phone}
								handleChange={this.getInputValue}
								handleBlur={this.checkInputError}
							/>
						</fieldset>
						<div className="buttonWrapper">
							<button disabled={this.state.editMode} onClick={e => this.onEditMode(e)}>
								수정
							</button>
							<button onClick={e => this.handleSubmit(e)}>변경</button>
						</div>
					</form>
				</section>
			</StyledWrapper>
		)
	}
}

export default withTranslation()(My)
