import React, { Component, Fragment } from "react"

import Layout from "components/Layout/Layout"
import AppHelmet from "components/AppHelmet/AppHelmet"
import SignUpComplete from "components/SignUp/SignUpComplete"
import SignUpForm from "components/SignUp/SignUpForm"

export default class SignUp extends Component {
	state = {
		isComplete: false
	}

	completeSignUp = () => {
		this.setState({
			isComplete: !this.state.isComplete
		})
	}

	render() {
		return (
			<Fragment>
				<AppHelmet />
				<Layout>
					<Layout.Content>
						{this.state.isComplete ? (
							<SignUpComplete />
						) : (
							<SignUpForm completeSignUp={this.completeSignUp} />
						)}
					</Layout.Content>
				</Layout>
			</Fragment>
		)
	}
}
