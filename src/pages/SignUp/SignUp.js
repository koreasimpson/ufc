import React, { Component, Fragment } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import InputField from "components/common/InputField"

const Container = styled.main`
	font-size: 2rem;

	.landing {
		padding-top: 200px;
		width: 980px;
		margin-left: auto;
		margin-right: auto;
		min-height: initial;
	}

	.sequrityQuestionField select {
		display: block;
	}
`

export default class SignUp extends Component {
	state = {
		name: ""
	}
	getValue = e => {
		this.setState({
			name: e.currentTarget.value
		})
		console.log("getValue =", e.currentTarget.value)
	}
	render() {
		const { className } = this.props
		return (
			<Container className={className}>
				<AppHelmet />
				<div className="landing">
					<h2>회원가입</h2>
					<p>UFC 계정을 생성하여 원하는 선수의 소식을 정기적으로 받아보세요</p>
					<form action="">
						<div className="nameField">
							<InputField labelText="성" getValue={this.getValue}></InputField>
							<InputField labelText="이름" />
						</div>
						<div className="emailField">
							<InputField type="email" labelText="이메일" />
						</div>
						<div className="passwordField">
							<InputField type="password" labelText="암호" />
						</div>
						<div className="passwordConfirmField">
							<InputField type="password" labelText="암호 확인" />
						</div>
						{/* 추가 정보 입력 */}
						<div className="phoneField">
							<InputField type="password" labelText="핸드폰 번호" />
						</div>
						<div className="addressField">{/* API 연동 */}</div>
						{/* 보안 관련 질의응답 */}
						<div className="sequrityQuestionField">
							<select name="" id="">
								<option value=""></option>
							</select>
							<InputField type="text" labelText="질문 답변" />
							<select name="" id="">
								<option value=""></option>
							</select>
							<InputField type="text" labelText="질문 답변" />
						</div>
						<button type="submit">회원가입</button>
					</form>
					<p>이용약관 및 개인정보보호방침</p>
				</div>
			</Container>
		)
	}
}
