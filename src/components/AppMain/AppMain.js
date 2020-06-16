import React, { Component, Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import { withTranslation, Trans } from "react-i18next"

import Event from "pages/Event/Event"
import Fighter from "pages/Fighter/Fighter"
import Ranking from "pages/Ranking/Ranking"
import Live from "pages/Live/Live"
import Shop from "pages/Shop/Shop"
import Support from "pages/Support/Support"
import My from "pages/My/My"
import Login from "pages/Login/Login"
import SignUp from "pages/SignUp/SignUp"
import PageNotFound from "pages/PageNotFound/PageNotFound"

import Auth from "components/Auth/Auth"
import Main from "components/Main/Main"

import { fetchFighters, fetchEvents } from "assets/lib/fetch"

class AppMain extends Component {
	constructor(props) {
		super(props)
		this.props = props
		fetchFighters()
		fetchEvents()
	}

	render() {
		const { className } = this.props
		return (
			<Fragment>
				<Switch>
					<Route path="/" exact>
						<Main />
					</Route>
					<Route path="/event/" component={Event} className={className} />
					<Route path="/fighter/" component={Fighter} className={className} />
					<Route path="/ranking/" component={Ranking} className={className} />
					<Route path="/live/" component={Live} className={className} />
					<Route path="/shop/" component={Shop} className={className} />
					<Route path="/support/" component={Support} />
					<Route path="/login/" component={Login} />
					<Auth path="/my/" component={My} className={className} />
					<Route path="/signup/" component={SignUp} />
					<Route component={PageNotFound} />
				</Switch>
			</Fragment>
		)
	}
}

const TransAppMain = withTranslation()(AppMain)

export default TransAppMain
