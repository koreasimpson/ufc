import React, { Component } from "react"
import { Route, Redirect, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import store from "store"

class Auth extends Component {
	render() {
		const { component: Component, ...rest } = this.props
		const isAuth = store.getState().authReducer.isAuth
		return (
			<Route
				{...rest}
				render={props =>
					isAuth ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: props.location }
							}}
						/>
					)
				}
			/>
		)
	}
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
export default withRouter(Auth)
