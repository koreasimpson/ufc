import React, { Component } from "react"
import store from "store"
import { ACCESS_LOGIN } from "../../store/actions/auth"

export default class Login extends Component {
	handleLogin = () => {
		store.dispatch({ type: ACCESS_LOGIN })
		const wantedPath = this.props.to.state.from.pathname
		console.log(wantedPath)
		this.props.history.push(wantedPath)
	}

	render() {
		console.log("login props =", this.props)
		return (
			<div>
				로그인이 필요합니다.
				<button onClick={this.handleLogin}>Login</button>
			</div>
		)
	}
}
