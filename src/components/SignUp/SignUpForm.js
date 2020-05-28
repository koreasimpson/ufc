import React, { Component } from "react"
import styled from "styled-components"
import InputField from "components/Common/InputField"
import { expPassword } from "assets/lib/validation"
import { withTranslation, Trans } from "react-i18next"

const Container = styled.main`
	font-size: 2rem;

	.landing {
		padding-top: 200px;
		width: 980px;
		margin-left: auto;
		margin-right: auto;
		min-height: initial;
	}

	form {
		min-width: 300px;
		max-width: 1200px;

		fieldset {
			border: none;
			padding: 0;
			&::after {
				content: "";
				display: block;
				width: 80%;
				height: 1px;
				margin: 0 auto;
				padding-bottom: 1.5rem;
				border-top: 1px solid #e7e7e7;
			}
		}

		[class*="Field"] {
			width: 460px;
			margin: 0 auto;
			display: flex;
		}

		.sequrityQuestionContainer {
			select {
				margin-bottom: 20px;
			}

			.inputField {
				display: block;
			}
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
`

class SignUp extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.form = {
			familyName: "",
			firstName: "",
			email: "",
			password: "",
			passwordConfirm: "",
			phone: "",
			// address: "",
			sequrityQuestion1: "1",
			sequrityAnswer1: "",
			sequrityQuestion2: "7",
			sequrityAnswer2: ""
		}
		this.formValidation = {
			familyName: "",
			firstName: "",
			email: "",
			password: "",
			passwordConfirm: "",
			phone: "",
			// address: "",
			sequrityAnswer1: "",
			sequrityAnswer2: ""
		}
		this.allPass = false
	}

	isAllPass = () => {
		this.allPass = true
		for (let key in this.formValidation) {
			if (this.formValidation[key] !== "pass") {
				this.allPass = false
			}
		}
		return this.allPass
	}

	handleInput = (value, name, isPassed) => {
		this.form[name] = value
		this.formValidation[name] = isPassed
	}

	handleSelect = e => {
		const options = Array.from(e.currentTarget.children)
		const name = e.currentTarget.name
		const selectedOptions = options.filter(option => option.selected)
		const selectedOptionsValue = selectedOptions.map(option => option.value)

		this.form[name] = selectedOptionsValue[0]
		this.formValidation[name] = "pass"
	}

	handleSubmit = e => {
		e.preventDefault()
		if (!this.isAllPass()) {
			alert(this.props.t("components.SignUp.Form.validation.notAllPass"))
		} else {
			this.props.completeSignUp()
		}
	}

	checkPasswordExp = e => {
		const email = this.form["email"]
		const password = this.form["password"]
		const result = expPassword.test(password)
		if (result) {
			if (this.form["email"] && password.includes(email)) {
				return {
					valid: false,
					validationText: this.props.t("components.InputField.validation.passwordInValidationText")
				}
			} else {
				return null
			}
		} else if (password) {
			return {
				valid: false,
				validationText: this.props.t("components.InputField.validation.passwordRules")
			}
		}
	}

	checkPasswordConfirm = () => {
		if (
			this.form["password"] &&
			this.form["passwordConfirm"] &&
			this.form["password"] !== this.form["passwordConfirm"]
		) {
			return {
				valid: false,
				validationText: this.props.t("components.InputField.validation.notSamePassword")
			}
		}
	}

	render() {
		const { className } = this.props
		return (
			<Container className={className}>
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
							<div className="nameField">
								<InputField labelText="familyName" name="familyName" onChange={this.handleInput} />
								<InputField labelText="firstName" name="firstName" onChange={this.handleInput} />
							</div>
							<div className="emailField">
								<InputField
									type="email"
									labelText="email"
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
									onBlur={this.checkPasswordExp}
								/>
							</div>
							<div className="passwordConfirmField">
								<InputField
									type="password"
									labelText="passwordConfirm"
									name="passwordConfirm"
									onChange={this.handleInput}
									onBlur={this.checkPasswordConfirm}
								/>
							</div>
						</fieldset>
						<fieldset>
							<legend className="a11yHidden">
								<Trans i18nKey="components.SignUp.Form.legend.required" />
							</legend>
							<div className="phoneField">
								<InputField
									type="text"
									labelText="phone"
									name="phone"
									onChange={this.handleInput}
								/>
							</div>
							<div className="addressField">{/* API 연동 */}</div>
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
									type="text"
									labelText="sequrityAnswer"
									name="sequrityAnswer1"
									onChange={this.handleInput}
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
									type="text"
									labelText="sequrityAnswer"
									name="sequrityAnswer2"
									onChange={this.handleInput}
								/>
							</div>
						</fieldset>
						<button ref={this.submit} type="submit">
							<Trans i18nKey="components.SignUp.Form.h2" />
						</button>
					</form>
				</section>
			</Container>
		)
	}
}

export default withTranslation()(SignUp)
