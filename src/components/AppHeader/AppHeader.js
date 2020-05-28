import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import AppGnb from "components/AppGnb/AppGnb"

const Container = styled.header`
	position: relative;
`

class AppHeader extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<Container className={`appHeader`}>
				<AppGnb />
			</Container>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
