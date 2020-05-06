import React, { Component } from "react"
import styled from "styled-components"
import { Switch, Route } from "react-router-dom"
import Event from "../Event/Event"
import Fighter from "../Fighter/Fighter"
import Article from "../Article/Article"
import Live from "../Live/Live"
import Shop from "../Shop/Shop"
import Support from "../Support/Support"
import Login from "components/Login/Login"
import Auth from "../Auth/Auth"

const Container = styled.div`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	min-height: 100vh;
`

class AppMain extends Component {
	render() {
		const { className } = this.props
		console.log(this.props)
		return (
			<Container>
				<Switch>
					기본 페이지
					<Route path="/event/" component={Event} className={className} />
					<Route path="/fighter/" component={Fighter} className={className} />
					<Route path="/article/" component={Article} className={className} />
					<Route path="/live/" component={Live} className={className} />
					<Route path="/shop/" component={Shop} className={className} />
					<Auth component={Support} path="/support" />
					<Route path="/login/" component={Login} className={className} />
				</Switch>
			</Container>
		)
	}
}

// const StyledAppMain = styled(AppMain)`
//   ${props => console.log("AppMain props =", props)}
// 	color: ${({ theme }) => theme.textColor};
// `

// export default withTheme(StyledAppMain)
export default AppMain
