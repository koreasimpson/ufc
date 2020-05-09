import React, { Component } from "react"

export default class Ranking extends Component {
	render() {
		const { url } = this.props.match
		return <div> {url} 체급 Ranking</div>
	}
}
