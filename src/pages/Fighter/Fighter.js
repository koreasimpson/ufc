import React, { Component, Fragment } from "react"
import { NavLink, Route } from "react-router-dom"
import Ranking from "components/Ranking/Ranking"
import AppHelmet from "components/AppHelmet/AppHelmet"

const pageData = {
	title: "선수",
	description: "UFC 선수정보를 제공하는 페이지",
	keywords: "UFC, UFC fighters, UFC 선수, UFC 체급별 선수",
	ogTItle: "UFC 선수",
	ogDescription: "UFC 선수정보를 제공하는 페이지",
	twitterTitle: "UFC 선수"
}

export default class Fighter extends Component {
	render() {
		const { url } = this.props.match
		return (
			<Fragment>
				<AppHelmet pageData={pageData} />
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
			</Fragment>
		)
	}
}
