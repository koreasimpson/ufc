import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
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
import AppHelmet from "components/AppHelmet/AppHelmet"

import langdingBg from "assets/img/background_header.jpg"
import { fetchFighters, fetchEvents } from "assets/lib/fetch"

const Container = styled.main`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};

	.landing {
		background-image: url(${langdingBg});

		dl {
			margin-top: 2rem;
			dt {
				font-size: 2rem;
				font-weight: bold;
				padding: 1rem;
				border: 1px solid #fff;
			}
			dd {
				font-size: 1.5rem;
				font-weight: bold;
				padding: 0.5rem;
			}
		}
	}
`
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
					<Route path="/event/" component={Event} className={className} />
					<Route path="/fighter/" component={Fighter} className={className} />
					<Route path="/ranking/" component={Ranking} className={className} />
					<Route path="/live/" component={Live} className={className} />
					<Route path="/shop/" component={Shop} className={className} />
					<Route path="/support/" component={Support} />
					<Route path="/login/" component={Login} />
					<Auth path="/my/" component={My} className={className} />
					<Route path="/signup/" component={SignUp} />
					<Route path="/" exact>
						<Container>
							<AppHelmet />
							<h2 className="a11yHidden">
								<Trans i18nKey="components.AppMain.h2" />
							</h2>
							<div className="landing bg">
								<p className="desc">
									<Trans i18nKey="components.AppMain.desc" />
								</p>
								<dl>
									<dt>
										<Trans i18nKey="components.AppMain.skills.title" />
									</dt>
									<dd>
										<Trans i18nKey="components.AppMain.skills.react" />
									</dd>
									<dd>
										<Trans i18nKey="components.AppMain.skills.reactHooks" />
									</dd>
									<dd>
										<Trans i18nKey="components.AppMain.skills.styledComponent" />
									</dd>
									<dd>
										<Trans i18nKey="components.AppMain.skills.redux" />
									</dd>
									<dd>
										<Trans i18nKey="components.AppMain.skills.reactRouter" />
									</dd>
								</dl>
							</div>
						</Container>
					</Route>
					<Route component={PageNotFound} />
				</Switch>
			</Fragment>
		)
	}
}

const TransAppMain = withTranslation()(AppMain)

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransAppMain)
