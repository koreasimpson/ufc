import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import { Alert, Select } from "antd"

import StyledWrapper from "./SignUpFormStyled"
import { expPassword, expEmail, expPhone } from "assets/lib/regExp"
import InputField from "components/common/InputField"
class SignUp extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	state = {
		val: {
			familyName: "",
			firstName: "",
			email: "",
			account: "",
			password: "",
			passwordConfirm: "",
			phone: "",
			sequrityQuestion1: "",
			sequrityAnswer1: "",
			sequrityQuestion2: "",
			sequrityAnswer2: ""
		},
		error: {
			familyName: "",
			firstName: "",
			email: "",
			account: "",
			password: "",
			passwordConfirm: "",
			phone: "",
			sequrityQuestion1: false,
			sequrityAnswer1: "",
			sequrityQuestion2: false,
			sequrityAnswer2: ""
		},
		errorText: {
			familyName: "",
			firstName: "",
			email: "",
			account: "",
			password: "",
			passwordConfirm: "",
			phone: "",
			sequrityQuestion1: "",
			sequrityAnswer1: "",
			sequrityQuestion2: "",
			sequrityAnswer2: ""
		}
	}

	makeUniqueId = () => {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
	}

	setUid = () => {
		return `${this.makeUniqueId()}-${this.makeUniqueId()}-${this.makeUniqueId()}-${this.makeUniqueId()}-${this.makeUniqueId()}`
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
		} else {
			switch (name) {
				case "email":
				case "account":
					const emailTestResult = expEmail.test(value)
					if (!emailTestResult) {
						error = true
						errorText = this.props.t("components.InputField.validation.emailForm")
					}
					break
				case "password":
					const passwordTestResult = expPassword.test(value)
					if (!passwordTestResult) {
						error = true
						errorText = this.props.t("components.InputField.validation.passwordRules")
					}
					break
				case "passwordConfirm":
					const isSame = this.state.val.password === value
					if (!isSame) {
						error = true
						errorText = this.props.t("components.InputField.validation.notSamePassword")
					}
					break
				default:
					break
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

	handleSelectChange = value => {
		let name
		value <= 6 ? (name = "sequrityQuestion1") : (name = "sequrityQuestion2")
		this.setState({
			...this.state,
			val: {
				...this.state.val,
				[name]: value
			}
		})
	}

	setSelectOptions = (start, end) => {
		let optionList = []
		for (let i = start; i <= end; i++) {
			optionList.push(
				<Select.Option value={i} key={`list${i}`}>
					<Trans
						i18nKey={`components.SignUp.Form.sequrityQuestionList.list${i}`}
						components={[<span></span>]}
					/>
				</Select.Option>
			)
		}
		return optionList
	}

	handleSubmit = e => {
		e.preventDefault()
		const isAllPass = this.isAllPass()
		if (isAllPass) {
			this.props.completeSignUp()
		} else {
			const alertElement = document.querySelector(".ant-alert")
			alertElement.style.display = "block"
			setTimeout(() => {
				alertElement.style.display = "none"
			}, 5000)
		}
	}

	isAllPass = () => {
		let isAllPass = true
		for (let key in this.state.error) {
			if (this.state.error[key] !== false) isAllPass = false
		}
		return isAllPass
	}

	render() {
		const { className, t } = this.props
		const { val, error, errorText } = this.state

		return (
			<StyledWrapper className={className}>
				<h2 className="title">
					<Trans i18nKey="components.SignUp.Form.h2" />
				</h2>
				<p className="desc">
					<Trans i18nKey="components.SignUp.Form.desc" />
				</p>
				<form onSubmit={this.handleSubmit}>
					<fieldset>
						<legend className="a11yHidden">
							<Trans i18nKey="components.SignUp.Form.legend.required" />
						</legend>
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
							labelText="account"
							type="text"
							name="account"
							value={val.account}
							tooltipText={t("components.InputField.toolTip.account")}
							error={error.account}
							errorText={errorText.account}
							handleChange={this.getInputValue}
							handleBlur={this.checkInputError}
						/>
						<InputField
							labelText="password"
							type="password"
							name="password"
							value={val.password}
							tooltipText={
								<Trans i18nKey={"components.InputField.toolTip.password"} components={[<br />]} />
							}
							error={error.password}
							errorText={errorText.password}
							handleChange={this.getInputValue}
							handleBlur={this.checkInputError}
						/>
						<InputField
							labelText="passwordConfirm"
							type="password"
							name="passwordConfirm"
							value={val.passwordConfirm}
							error={error.passwordConfirm}
							errorText={errorText.passwordConfirm}
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
					<fieldset>
						<legend className="a11yHidden">
							<Trans i18nKey="components.SignUp.Form.legend.sequrityQuestion" />
						</legend>
						<div className="sequrityQuestionContainer">
							<Select defaultValue={1} onChange={this.handleSelectChange}>
								{this.setSelectOptions(1, 6)}
							</Select>
							<InputField
								labelText="sequrityAnswer1"
								type="text"
								name="sequrityAnswer1"
								value={val.sequrityAnswer1}
								error={error.sequrityAnswer1}
								errorText={errorText.sequrityAnswer1}
								handleChange={this.getInputValue}
								handleBlur={this.checkInputError}
							/>
							<Select defaultValue={7} onChange={this.handleSelectChange}>
								{this.setSelectOptions(7, 12)}
							</Select>
							<InputField
								labelText="sequrityAnswer2"
								type="text"
								name="sequrityAnswer2"
								value={val.sequrityAnswer2}
								error={error.sequrityAnswer2}
								errorText={errorText.sequrityAnswer2}
								handleChange={this.getInputValue}
								handleBlur={this.checkInputError}
							/>
						</div>
					</fieldset>
					<button type="submit" className="button submit">
						<Trans i18nKey="components.SignUp.Form.h2" />
					</button>
					<Alert
						message={t("components.SignUp.Form.validation.notAllPass.title")}
						description={t("components.SignUp.Form.validation.notAllPass.desc")}
						type="error"
						showIcon
					/>
				</form>
			</StyledWrapper>
		)
	}
}

export default withTranslation()(SignUp)
