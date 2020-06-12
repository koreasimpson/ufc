import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.main``

export default class SignUpComplete extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		const { className } = this.props
		return (
			<Container className={className}>
				<AppHelmet />
				<section className="contentWrap">
					<h2>회원가입 완료</h2>
					<div>누구누구님 반갑습니다 '이러한' 계정으로 가입이 완료되었습니다. 감사합니다</div>
					<Link to="/">로그인하기</Link>
				</section>
			</Container>
		)
	}
}
