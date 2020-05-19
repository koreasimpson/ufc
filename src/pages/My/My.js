import React, { Component, Fragment } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"

export default class My extends Component {
	render() {
		return (
			<Fragment>
				<AppHelmet />
				<div>My page야 로그인// 회원가입//</div>
			</Fragment>
		)
	}
}
