import React, { Component } from "react"
import { Route, Redirect, withRouter } from "react-router-dom"
import store from "store"
import { connect } from "react-redux"

class Auth extends Component {
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

const mapStateToProps = state => ({
	isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
