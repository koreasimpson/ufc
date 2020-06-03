import React, { Component } from "react"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"
import { Link, withRouter } from "react-router-dom"

import store from "store"
import defaultProfileFrontImage from "assets/img/fighters/fighter_profile.png"
import defaultProfileBackImage from "assets/img/fighters/fighter_right.png"
import { SET_TARGET_FIGHTERS } from "store/actions/fighter"
import { breakpoint, device } from "config/responsive"

const Container = styled.li`
	position: relative;
	display: inline-block;
	width: 25%;
	min-height: 250px;
	cursor: pointer;
	transition: box-shadow 0.3s ease-in-out;
	transform-style: preserve-3d;
	perspective: 400px;
	box-sizing: border-box;
	margin-top: 2rem;

	&:hover,
	&:focus {
		animation: 0.3s hoverstyle alternate infinite;
		.front {
			transform: translateX(-50%) rotateY(180deg);
		}
		.back {
			transform: translateX(-50%) rotateY(360deg);
		}
	}

	.front,
	.back {
		width: 100%;
		margin: 0 auto;
		height: 100%;
		backface-visibility: hidden;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		transition: transform 0.8s;
	}

	.aka {
		letter-spacing: 0.1rem;
		color: #acadb1;
		margin-top: 10px;
	}
	.name {
		font-weight: bold;
		font-size: 1.3rem;
		margin-top: 10px;
	}
	.weightClass {
		text-transform: capitalize;
		font-size: 0.8rem;
		margin-top: 5px;
	}
	.record {
		color: #585b64;
		font-size: 0.8rem;
		margin-top: 5px;
	}
	.aka,
	.name,
	.record {
		white-space: nowrap;
	}

	.back {
		transform: translateX(-50%) rotateY(180deg);
		display: flex;
		flex-direction: column;

		.info {
			flex: 1;
			align-items: center;
			display: flex;
			justify-content: space-between;

			.left {
				.aka {
					font-size: 0.6rem;
				}
				.name {
					font-size: 0.7rem;
				}
				.buttonMoreInfo {
					margin-top: 20px;
					display: inline-block;
					border: 1px solid #000;
					padding: 10px;
				}
			}
			.right {
				img {
					width: 100%;
				}
			}
		}
		.snsWrap {
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;

			dt {
				display: inline-block;
				margin-right: 15px;
			}

			dd {
				font-size: 0.7rem;
				display: inline-block;
				padding: 5px;
			}
		}
	}

	@keyframes hoverstyle {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.01);
		}
	}

	@media screen and ${device.mobileTabletOnly} {
		width: 100%;
		max-width: 320px;
	}
`

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
			<Container className={className}>
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
			</Container>
		)
	}
}

const TransFighterList = withTranslation()(FighterList)

export default withRouter(TransFighterList)
