import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import styled from "styled-components"
import defaultFighterImg from "assets/img/fighters/fighter_profile.png"

const Container = styled.div`
	.groupTitle {
		text-transform: uppercase;
		color: ${({ theme }) => theme.majorColor};
	}
	.champion {
		position: relative;
		height: 150px;
		border-bottom: 1px solid #eee;

		figure {
			position: absolute;
			bottom: 0;
			right: 0;
			transition: transform 0.5s;
			transform-origin: bottom;

			&:hover {
				transform: scale(1.1);
			}
		}
	}

	dd {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10%;
		box-sizing: border-box;
	}

	.icon {
		i {
			display: inline-block;
			margin-right: 5px;
			border-right: 4px solid transparent;
			border-left: 4px solid transparent;
			width: 0;
			height: 0;
		}

		[class*="up"] {
			border-bottom: 6px solid #a3d20a;
			line-height: 10px;
		}

		[class*="down"] {
			border-top: 6px solid #d20a0a;
			line-height: 0;
		}

		[class*="new"] {
			&:after {
				content: "new";
				display: inline-block;
				font-size: 0.8rem;
				color: gold;
			}
		}

		[class*="equal"] {
			&:after {
				content: "-";
				display: inline-block;
				font-size: 0.8rem;
			}
		}
	}
`

class RankingList extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { className, group } = this.props
		return (
			<Container className={className}>
				<dl>
					<div>
						<dt className="groupTitle">{group}</dt>
						<dd className="champion">
							<p>챔피온 네임</p>
							<figure>
								<img src={defaultFighterImg} alt="챔피언 사진" />
							</figure>
						</dd>
					</div>
					<div>
						<dd>
							<span>rank</span>
							<span className="icon">
								<i className="up"></i>1
							</span>
						</dd>
						<dd>
							<span>rank</span>
							<span className="icon">
								<i className="down"></i>2
							</span>
						</dd>
						<dd>
							<span>rank</span>
							<span className="icon">
								<i className="new"></i>
							</span>
						</dd>
						<dd>
							<span>rank</span>
							<span className="icon">
								<i className="equal"></i>
							</span>
						</dd>
					</div>
				</dl>
			</Container>
		)
	}
}

export default withTranslation()(RankingList)
