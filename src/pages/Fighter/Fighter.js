import React, { Component } from "react"
import { NavLink, Route } from "react-router-dom"
import Ranking from "./Ranking"

export default class Fighter extends Component {
	render() {
		console.log("fighter props =", this.props)
		const { url } = this.props.match
		return (
			<section>
				<ul>
					<li>
						<NavLink to={`${url}/all`}>모든 선수</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/bantam`}>밴텀급</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/feather`}>페더급</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/light`}>라이트급</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/welter`}>웰터급</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/middle`}>미들급</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/lightheavy`}>라이트헤비급</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/heavy`}>헤비급</NavLink>
					</li>
				</ul>
				<div className="route">
					<Route path={`${url}/:weight`} component={Ranking} />
				</div>
			</section>
		)
	}
}
