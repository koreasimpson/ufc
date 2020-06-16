import React, { Component } from "react"
import { connect } from "react-redux"

import AppGnb from "components/AppGnb/AppGnb"
import StyledWrapper from "./AppHeaderStyled"

class AppHeader extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<StyledWrapper className={`appHeader`}>
				<AppGnb />
			</StyledWrapper>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
