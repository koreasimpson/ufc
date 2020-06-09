import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"

const Container = styled.main``

class My extends Component {
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
					<h2>
						<Trans i18nKey="pages.My.h2" />
					</h2>
					<form action="">
						<fieldset disabled>
							<legend>계정</legend>
							<div>
								<label>계정</label>
								<input type="text" />
							</div>
							<div>
								<label>이메일</label>
								<input type="text" />
							</div>
							<div>
								<label>아이디</label>
								<input type="text" />
							</div>
						</fieldset>
						<fieldset disabled>
							<legend>보안</legend>
							<div>
								<label>암호 변경</label>
								<input type="password" />
								<input type="password" />
							</div>
							<div>
								<label>핸드폰 번호</label>
								<input type="text" />
							</div>
						</fieldset>
					</form>
				</section>
			</Container>
		)
	}
}

export default withTranslation()(My)
