import React, { Component } from "react"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"
import { Link, withRouter } from "react-router-dom"
import defaultProfileFrontImage from "assets/img/fighters/fighter_profile.png"
import defaultProfileBackImage from "assets/img/fighters/fighter_right.png"

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

	&:hover {
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
		max-width: 300px;
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
		letter-spacing: 0.3rem;
		color: #acadb1;
	}
	.name {
		font-weight: bold;
		font-size: 2rem;
	}
	.record {
		color: #585b64;
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
		.left {
			float: left;
			width: 50%;
		}
		.right {
			float: right;
			width: 50%;

			img {
				width: 100%;
			}
		}
		.info {
			flex: 1;
			display: flex;
			align-items: center;
		}
		dl {
			height: 50px;
			dt {
				display: inline-block;
			}

			dd {
				display: inline-block;
				padding: 5px;
			}
		}
	}

	@keyframes hoverstyle {
		from {
			box-shadow: 0 0 0 1px ${({ theme }) => theme.majorColor} inset,
				0 0 20px 5px rgba(204, 11, 11, 0.3);
			transform: scale(1);
		}
		to {
			box-shadow: 0 0 0 1px ${({ theme }) => theme.majorColor} inset,
				0 0 10px 1px rgba(204, 11, 11, 0.3);
			transform: scale(1.01);
		}
	}
`

class FighterList extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { name, aka, weightClass, record } = this.props.data
		const { url } = this.props.match
		return (
			<Container>
				<div className="front">
					<figure>
						<img src={defaultProfileFrontImage} alt={name} />
					</figure>
					<p className="aka">"{aka}"</p>
					<p className="name">{name}</p>
					<p className="weightClass">{weightClass}</p>
					<p className="record">
						{record.win}-{record.lose}-{record.draw} | W-L-D
					</p>
				</div>
				<div className="back">
					<div className="info">
						<div className="left">
							<p className="aka">"{aka}"</p>
							<p className="name">{name}</p>
							<Link to={`${url}/profile/${name}`} data-name={name}>
								프로필 보기
							</Link>
						</div>
						<figure className="right">
							<img src={defaultProfileBackImage} alt={name} />
						</figure>
					</div>
					<dl>
						<dt>SNS</dt>
						<dd>facebook</dd>
						<dd>insta</dd>
						<dd>twitter</dd>
					</dl>
				</div>
			</Container>
		)
	}
}

const TransFighterList = withTranslation()(FighterList)

export default withRouter(TransFighterList)
