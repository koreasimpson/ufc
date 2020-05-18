import React, { Component } from "react"
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

import Auth from "components/Auth/Auth"

import db from "../../firebaseInit"

var cityRef = db.collection("cities").doc("new-city-id")

var updateSingle = cityRef.update({ capital: false })

const Container = styled.main`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	min-height: 100vh;
`

class AppMain extends Component {
	updateFirebase = boolean => {
		var updateSingle
		boolean
			? (updateSingle = cityRef.update({ capital: true }))
			: (updateSingle = cityRef.update({ capital: false }))
	}

	render() {
		const { className } = this.props
		return (
			<Container>
				<Switch>
					기본 페이지
					<Route path="/event/" component={Event} className={className} />
					<Route path="/fighter/" component={Fighter} className={className} />
					<Route path="/article/" component={Article} className={className} />
					<Route path="/live/" component={Live} className={className} />
					<Route path="/shop/" component={Shop} className={className} />
					<Route path="/support/" component={Support} />
					<Auth path="/my/" component={My} className={className} />
					<Route path="/">
						<h2>메인 페이지</h2>
						<button onClick={e => this.updateFirebase(true)}>업데이트</button>
						<button onClick={e => this.updateFirebase(false)}>업데이트</button>
					</Route>
				</Switch>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	lang: state.langReducer.lang
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppMain)
