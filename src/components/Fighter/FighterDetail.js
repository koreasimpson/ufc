import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import { withRouter, Redirect } from "react-router-dom"
import store from "store"
import { connect } from "react-redux"

class FighterDetail extends Component {
	constructor(props) {
		super(props)
		this.props = props
		if (!this.props.fighters.length) {
			console.log("hi")
			this.props.history.replace("/")
		}
	}

	static defaultProps = {
		fighters: []
	}

	render() {
		console.log(this.props)
		const { fighters } = this.props
		const { goBack } = this.props.history
		return fighters.length ? (
			<div>
				<h3>{fighters[0].name}</h3>
				<p>aka</p>
				<p>weightClass</p>
				<button onClick={goBack}>뒤로 가기</button>
			</div>
		) : (
			<Redirect to="/fighter" />
		)
	}
}

const TransFighterDetail = withTranslation()(FighterDetail)

const mapStateToProps = state => ({
	fighters: state.fighterReducer.fighters
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransFighterDetail))
