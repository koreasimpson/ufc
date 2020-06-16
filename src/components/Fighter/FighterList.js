import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import { Link, withRouter } from "react-router-dom"

import store from "store"
import defaultProfileFrontImage from "assets/img/fighters/fighter_profile.png"
import defaultProfileBackImage from "assets/img/fighters/fighter_right.png"
import { SET_TARGET_FIGHTERS } from "store/actions/fighter"
import StyledWrapper from "./FighterListStyled"

class FighterList extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	setTargetFighterData = data => {
		store.dispatch({ type: SET_TARGET_FIGHTERS, value: data })
	}

	render() {
		const { className } = this.props
		const { name, aka, weightClass, record } = this.props.data
		const { url } = this.props.match
		return (
			<StyledWrapper className={className}>
				<div className="front">
					<figure>
						<img src={defaultProfileFrontImage} alt={name} />
					</figure>
					<p className="aka" hidden={!aka.length}>
						"{aka}"
					</p>
					<p className="name">{name}</p>
					<p className="weightClass">{weightClass}</p>
					<p className="record">
						{record.win}-{record.lose}-{record.draw} | W-L-D
					</p>
				</div>
				<div className="back">
					<div className="info">
						<div className="left">
							<p className="aka" hidden={!aka.length}>
								"{aka}"
							</p>
							<p className="name">{name}</p>
							<Link
								to={`${url}/profile/${name}`}
								data-name={name}
								onClick={() => this.setTargetFighterData(this.props.data)}
								className="buttonMoreInfo">
								<Trans i18nKey="components.FighterList.profile.button" />
							</Link>
						</div>
						<figure className="right">
							<img src={defaultProfileBackImage} alt={name} />
						</figure>
					</div>
					<dl className="snsWrap">
						<dt>
							<Trans i18nKey="common.sns.title" />
						</dt>
						<dd>
							<Trans i18nKey="common.sns.facebook" />
						</dd>
						<dd>
							<Trans i18nKey="common.sns.instagram" />
						</dd>
						<dd>
							<Trans i18nKey="common.sns.twitter" />
						</dd>
					</dl>
				</div>
			</StyledWrapper>
		)
	}
}

const TransFighterList = withTranslation()(FighterList)

export default withRouter(TransFighterList)
