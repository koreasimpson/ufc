import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import InputField from "components/Common/InputField"
import { expPassword, expEmail, expPhone } from "assets/lib/regExp"
import StyledWrapper from "./SignUpFormStyled"
import { Alert } from "antd"

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

	handleSelect = e => {
		const options = Array.from(e.currentTarget.children)
		const name = e.currentTarget.name
		const selectedOptions = options.filter(option => option.selected)
		const selectedOptionsValue = selectedOptions.map(option => option.value)

		this.setState({
			...this.state,
			val: {
				...this.state.val,
				[name]: selectedOptionsValue[0]
			}
		})
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
				<section className="contentWrap">
					<h2>
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
								// tooltipText={t("components.InputField.toolTip.password")}
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
								<select
									name="sequrityQuestion1"
									className="sequrityField"
									onChange={this.handleSelect}>
									<option value="1" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list1")}
									</option>
									<option value="2" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list2")}
									</option>
									<option value="3" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list3")}
									</option>
									<option value="4" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list4")}
									</option>
									<option value="5" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list5")}
									</option>
									<option value="6" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list6")}
									</option>
								</select>
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
								<select
									name="sequrityQuestion2"
									className="sequrityField"
									onChange={this.handleSelect}>
									<option value="7" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list7")}
									</option>
									<option value="8" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list8")}
									</option>
									<option value="9" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list9")}
									</option>
									<option value="10" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list10")}
									</option>
									<option value="11" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list11")}
									</option>
									<option value="12" dir="auto">
										{this.props.t("components.SignUp.Form.sequrityQuestionList.list12")}
									</option>
								</select>
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
				</section>
			</StyledWrapper>
		)
	}
}

export default withTranslation()(SignUp)
