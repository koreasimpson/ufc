import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
`

class AppMain extends Component {
	render() {
		const { className } = this.props
		return <Container className={className}>안녕 나는 AppMain 컨텐츠야 ^^</Container>
	}
}

// const StyledAppMain = styled(AppMain)`
//   ${props => console.log("AppMain props =", props)}
// 	color: ${({ theme }) => theme.textColor};
// `

// export default withTheme(StyledAppMain)
export default AppMain
