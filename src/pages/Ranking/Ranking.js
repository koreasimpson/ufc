import React, { Component } from "react"
import { NavLink, Route } from "react-router-dom"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"

const Container = styled.main``

class Ranking extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		const { className } = this.props
		const { url } = this.props.match
		return (
			<Container className={className}>
				<AppHelmet />
				<ul>
					<li>
						<NavLink to={`${url}/all`}>
							<Trans i18nKey="common.weightClass.all" />
						</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/bantam`}>
							<Trans i18nKey="common.weightClass.bantam" />
						</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/feather`}>
							<Trans i18nKey="common.weightClass.feather" />
						</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/light`}>
							<Trans i18nKey="common.weightClass.light" />
						</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/welter`}>
							<Trans i18nKey="common.weightClass.welter" />
						</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/middle`}>
							<Trans i18nKey="common.weightClass.middle" />
						</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/lightheavy`}>
							<Trans i18nKey="common.weightClass.lightheavy" />
						</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/heavy`}>
							<Trans i18nKey="common.weightClass.heavy" />
						</NavLink>
					</li>
				</ul>
				<div className="route">
					<Route path={`${url}/:weight`} component={Ranking} />
				</div>
			</Container>
		)
	}
}

export default withTranslation()(Ranking)
