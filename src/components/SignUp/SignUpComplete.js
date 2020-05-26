import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"

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
				</section>
			</Container>
		)
	}
}
