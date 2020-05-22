import React, { Component } from "react"
import styled from "styled-components"
import InputField from "components/common/InputField"
import { expPassword } from "assets/validation/validation"

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

	.sequrityQuestionContainer .inputField {
		display: block;
	}
`

export default class SignUp extends Component {
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
			sequrityQuestion1: "1-1",
			sequrityAnswer1: "",
			sequrityQuestion2: "2-1",
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
			alert("가입 폼을 양식에 맞게 모두 입력해주세요")
		} else {
			this.props.completeSignUp()
		}
		// console.log("this.form =", this.form)
		// console.log("this.formValid =", this.formValidation)
	}

	checkPasswordExp = e => {
		const email = this.form["email"]
		const password = this.form["password"]
		const result = expPassword.test(password)
		if (result) {
			if (this.form["email"] && password.includes(email)) {
				return {
					valid: false,
					validationText: "암호에 이메일에 입력한 값이 포함되어서는 안 됩니다."
				}
			} else {
				return null
			}
		} else if (password) {
			return {
				valid: false,
				validationText: "최소 1개의 숫자와 특수문자를 포함한 6~20자의 영문으로 생성해야 합니다."
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
				validationText: "입력한 암호와 일치하지 않습니다"
			}
		}
	}

	render() {
		const { className } = this.props
		return (
			<Container className={className}>
				<div className="landing">
					<h2>회원가입</h2>
					<p>UFC 계정을 생성하여 원하는 선수의 소식을 정기적으로 받아보세요</p>
					<form onSubmit={this.handleSubmit}>
						<fieldset>
							<legend className="a11yHidden">필수정보입력</legend>
							<div className="nameField">
								<InputField labelText="성" name="familyName" onChange={this.handleInput} />
								<InputField labelText="이름" name="firstName" onChange={this.handleInput} />
							</div>
							<div className="emailField">
								<InputField
									type="email"
									labelText="이메일"
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
									onBlur={this.checkPasswordExp}
								/>
							</div>
							<div className="passwordConfirmField">
								<InputField
									type="password"
									labelText="암호 확인"
									name="passwordConfirm"
									onChange={this.handleInput}
									onBlur={this.checkPasswordConfirm}
								/>
							</div>
						</fieldset>
						<fieldset>
							<legend className="a11yHidden">필수정보입력</legend>
							<div className="phoneField">
								<InputField
									type="text"
									labelText="핸드폰 번호"
									name="phone"
									onChange={this.handleInput}
								/>
							</div>
							<div className="addressField">{/* API 연동 */}</div>
						</fieldset>
						<fieldset>
							<legend className="a11yHidden">
								보안 질문 응답. 이 질문은 암호 분실 시 신원을 확인하고 암호를 복구하는 데
								사용됩니다.
							</legend>
							<div className="sequrityQuestionContainer">
								<select
									name="sequrityQuestion1"
									className="sequrityField"
									onChange={this.handleSelect}>
									<option value="1-1" dir="auto">
										10대 시절에 가장 친하게 지냈던 친구의 이름은 무엇입니까?
									</option>
									<option value="1-2" dir="auto">
										첫 애완동물의 이름은 무엇입니까?
									</option>
									<option value="1-3" dir="auto">
										처음 배운 요리는 무엇입니까?
									</option>
									<option value="1-4" dir="auto">
										영화관에서 처음으로 관람한 영화는 무엇입니까?
									</option>
									<option value="1-5" dir="auto">
										처음으로 비행기를 타고 방문한 곳은 어디입니까?
									</option>
									<option value="1-6" dir="auto">
										초등학교 또는 중학교 시절 가장 좋아했던 선생님의 성함은 무엇입니까?{" "}
									</option>
								</select>

								<InputField
									type="text"
									labelText="질문 답변"
									name="sequrityAnswer1"
									onChange={this.handleInput}
								/>
								<select
									name="sequrityQuestion2"
									className="sequrityField"
									onChange={this.handleSelect}>
									<option value="2-1" dir="auto">
										꿈의 직업은 무엇입니까?
									</option>
									<option value="2-2" dir="auto">
										가장 좋아했던 동화책의 제목은 무엇입니까?
									</option>
									<option value="2-3" dir="auto">
										처음으로 소유했던 자동차의 모델명은 무엇입니까?
									</option>
									<option value="2-4" dir="auto">
										어린 시절의 별명은 무엇입니까?
									</option>
									<option value="2-5" dir="auto">
										학창 시절 가장 좋아했던 영화 배우 또는 영화 속 캐릭터는 누구입니까?
									</option>
									<option value="2-6" dir="auto">
										학창 시절 가장 좋아했던 밴드 또는 가수는 누구입니까?
									</option>
								</select>

								<InputField
									type="text"
									labelText="질문 답변"
									name="sequrityAnswer2"
									onChange={this.handleInput}
								/>
							</div>
						</fieldset>
						<button ref={this.submit} type="submit">
							회원가입
						</button>
					</form>
					<p>이용약관 및 개인정보보호방침</p>
				</div>
			</Container>
		)
	}
}
