import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import store from "store"
import Login from "components/Login/Login"

export default class Auth extends Component {
	render() {
		const { component: Component, ...rest } = this.props
		const { isAuth } = store.getState().authReducer
		return (
			<Route
				{...rest}
				render={props =>
					isAuth ? (
						<Component {...props} />
					) : (
						<Login {...props} to={{ pathname: "/login", state: { from: props.location } }} />
					)
				}
			/>
		)
	}
}
