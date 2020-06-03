import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import { withRouter, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import styled from "styled-components"
import defaultFighterImg from "assets/img/fighters/fighter_left.png"

const Container = styled.section`
	h3 {
		font-size: 5rem;
	}

	dt {
		font-size: 1rem;
		color: #585b64;
	}
	dd {
		font-size: 1.5rem;
		text-transform: uppercase;
	}

	.record {
		display: flex;
		justify-content: space-evenly;
	}

	.contentWrap {
		display: flex;
		min-height: 60vh;

		.left,
		.right {
			flex: 1;
		}

		.left {
			img {
				height: 100%;
			}
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;

			.breakLine {
				display: flex;
				text-align: left;
				padding: 20px 0;
				border-bottom: 1px solid #eee;

				div {
					flex: 1;
				}
			}
		}
	}
`

class FighterDetail extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	componentDidMount() {
		const body = document.querySelector("body")
		body.scrollIntoView({ behavior: "smooth" })
	}

	render() {
		const { target, className } = this.props
		console.log("target =", target)
		return target.name ? (
			<Container className={className}>
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
				<div className="contentWrap">
					<figure className="left">
						<img src={defaultFighterImg} alt={target.name} />
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
				<div>
					<p>
						<Trans i18nKey="components.FighterDetail.comment.title" />
					</p>
					<p>
						<Trans i18nKey="components.FighterDetail.comment.desc" />
					</p>
					<button>
						<Trans i18nKey="components.FighterDetail.comment.button" />
					</button>
				</div>
			</Container>
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
