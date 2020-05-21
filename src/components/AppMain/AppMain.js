import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Switch, Route } from "react-router-dom"

import Event from "pages/Event/Event"
import Fighter from "pages/Fighter/Fighter"
import Article from "pages/Article/Article"
import Live from "pages/Live/Live"
import Shop from "pages/Shop/Shop"
import Support from "pages/Support/Support"
import My from "pages/My/My"
import Login from "pages/Login/Login"
import SignUp from "pages/SignUp/SignUp"

import Auth from "components/Auth/Auth"
import AppHelmet from "components/AppHelmet/AppHelmet"

import BgHeader from "assets/img/background_header.jpg"

const Container = styled.main`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	min-height: 100vh;

	.landing {
		background-image: url(${BgHeader});
		color: ${({ theme }) => theme.textColorInvert};
		padding-top: 20rem;
		.App__Desc {
			font-size: 5rem;
			font-weight: bold;
			text-shadow: 1px 1px 1px #cc0b0b;
		}
		dl {
			margin-top: 2rem;
			dt {
				font-size: 2rem;
				font-weight: bold;
				padding-bottom: 2rem;
			}
		}
	}
`
class AppMain extends Component {
	render() {
		const { className } = this.props
		return (
			<Fragment>
				<Switch>
					기본 페이지
					<Route path="/event/" component={Event} className={className} />
					<Route path="/fighter/" component={Fighter} className={className} />
					<Route path="/article/" component={Article} className={className} />
					<Route path="/live/" component={Live} className={className} />
					<Route path="/shop/" component={Shop} className={className} />
					<Route path="/support/" component={Support} />
					<Route path="/login/" component={Login} />
					<Auth path="/my/" component={My} className={className} />
					<Route path="/signup/" component={SignUp} />
					<Route path="/">
						<Container>
							<AppHelmet />
							<h2 className="a11yHidden">메인 페이지</h2>
							<div className="landing">
								<p className="App__Desc">"CRA를 사용하여 제작한 UFC 홈페이지"</p>
								<dl>
									<dt>Use Skill</dt>
									<dd>React</dd>
									<dd>React-hooks</dd>
									<dd>styled-component</dd>
									<dd>redux</dd>
									<dd>react-router</dd>
								</dl>
							</div>
						</Container>
					</Route>
				</Switch>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	lang: state.langReducer.lang
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppMain)
