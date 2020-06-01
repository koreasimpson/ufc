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
					<div>
						<p>계정</p>
						<dl>
							<div>
								<dt>계정</dt>
								<dd></dd>
							</div>
							<div>
								<dt>이메일</dt>
								<dd></dd>
							</div>
							<div>
								<dt>ID</dt>
								<dd></dd>
							</div>
						</dl>
					</div>
					<div>
						<p>보안</p>
						<dl>
							<div>
								<dt>암호</dt>
								<dd>암호 변경</dd>
							</div>
							<div>
								<dt>신뢰하는 연락처</dt>
								<dd>핸드폰 번호</dd>
							</div>
						</dl>
					</div>
				</section>
			</Container>
		)
	}
}

export default withTranslation()(My)
