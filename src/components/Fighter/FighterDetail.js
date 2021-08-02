import React, { Component, createRef } from "react"
import { withTranslation, Trans } from "react-i18next"
import { withRouter, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { DiscussionEmbed } from "disqus-react"

import defaultFighterImg from "assets/img/fighters/fighter_left.png"
import StyledWrapper from "./FighterDetailStyled"
class FighterDetail extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.profileImg = createRef()
	}

	setProfileImage = () => {
		const img = new Image()
		const This = this
		const src = `https://kr.object.ncloudstorage.com/ufc/fighters/${this.props.target.name.replace(
			" ",
			"_"
		)}_L.png`
		img.onload = function() {
			if (This.profileImg.current) This.profileImg.current.src = src
		}
		img.onerror = function() {
			console.clear()
			if (This.profileImg.current) This.profileImg.current.src = defaultFighterImg
		}
		img.src = src
	}

	componentDidMount() {
		const body = document.querySelector("body")
		body.scrollIntoView({ behavior: "smooth" })
	}

	render() {
		const { target, className } = this.props
		if (target.name) this.setProfileImage()
		return target.name ? (
			<StyledWrapper className={className}>
				<dl className="record">
					<div>
						<dt>
							<Trans i18nKey="common.win" />
						</dt>
						<dd>{target.record.win}</dd>
					</div>
					<div>
						<dt>
							<Trans i18nKey="common.lose" />
						</dt>
						<dd>{target.record.lose}</dd>
					</div>
					<div>
						<dt>
							<Trans i18nKey="common.draw" />
						</dt>
						<dd>{target.record.draw}</dd>
					</div>
				</dl>
				<div className="detailInfo">
					<figure className="left">
						<img src={defaultFighterImg} alt={target.name} ref={this.profileImg} />
					</figure>
					<dl className="right">
						<div className="breakLine">
							<div>
								<dt>
									<Trans i18nKey="common.label.statue" />
								</dt>
								<dd>
									<Trans i18nKey="common.active" />
								</dd>
							</div>
							<div>
								<dt>
									<Trans i18nKey="common.label.weightClass" />
								</dt>
								<dd>{target.weightClass}</dd>
							</div>
						</div>
						<div className="breakLine">
							<div>
								<dt>
									<Trans i18nKey="common.label.hometown" />
								</dt>
								<dd>{target.hometown}</dd>
							</div>
						</div>
						<div className="breakLine">
							<div>
								<dt>
									<Trans i18nKey="common.label.age" />
								</dt>
								<dd>{target.age}</dd>
							</div>
							<div>
								<dt>
									<Trans i18nKey="common.label.height" />
								</dt>
								<dd>{target.height}</dd>
							</div>
							<div>
								<dt>
									<Trans i18nKey="common.label.weight" />
								</dt>
								<dd>{target.weight}</dd>
							</div>
						</div>
						<div className="breakLine">
							<div>
								<dt>
									<Trans i18nKey="common.label.octagonDebut" />
								</dt>
								<dd>{target.octagonDebut}</dd>
							</div>
							<div>
								<dt>
									<Trans i18nKey="common.label.reach" />
								</dt>
								<dd>{target.reach}</dd>
							</div>
							<div>
								<dt>
									<Trans i18nKey="common.label.legReach" />
								</dt>
								<dd>{target.legReach}</dd>
							</div>
						</div>
					</dl>
				</div>
				<div className="commentWrap">
					<p>
						<Trans i18nKey="components.FighterDetail.comment.title" />
					</p>
					<p>
						<Trans i18nKey="components.FighterDetail.comment.desc" />
					</p>
					<DiscussionEmbed
						shortname="ufc"
						config={{
							url: `https://koreassimpson.github.io/ufc/${target.name.replace(/ /g, "")}`,
							identifier: target.name.replace(/ /g, ""),
							title: target.name.replace(/ /g, ""),
							category_id: target.name.replace(/ /g, "")
						}}
					/>
				</div>
			</StyledWrapper>
		) : (
			<Redirect to="/fighter" />
		)
	}
}

const TransFighterDetail = withTranslation()(FighterDetail)

const mapStateToProps = state => ({
	target: state.fighterReducer.target
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransFighterDetail))
