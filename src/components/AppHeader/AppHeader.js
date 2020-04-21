import React, { Component } from "react"
import styled from "styled-components"

import BgHeader from "assets/img/background_header.jpg"
import AppGnb from "components/AppGnb/AppGnb"

const Container = styled.header`
	background-image: url(${BgHeader});
	background-attachment: fixed;
	min-height: 100vh;
	background-size: cover;
	background-position: center center;
	margin: 0 auto;
	font-size: calc(10px + 2vmin);
	color: ${({ theme }) => theme.textColorInvert};
	text-align: center;

	div {
		padding-top: 20rem;
		.App__Desc {
			font-size: 3rem;
			font-weight: bold;
			text-shadow: 1px 1px 1px #cc0b0b;
		}

		dl {
			margin-top: 2rem;
			dt {
				font-size: 2rem;
				font-weight: bold;
				padding-bottom: 2rem;
			}
		}
	}
`

class AppHeader extends Component {
	render() {
		const { className } = this.props
		return (
			<Container className={`App__Header ${className}`}>
				<AppGnb />
				<div>
					<p className="App__Desc">CRA를 사용하여 제작한 UFC 홈페이지</p>
					<dl>
						<dt>Use Skill</dt>
						<dd>React</dd>
						<dd>styled-component</dd>
						<dd>scss</dd>
						<dd>redux</dd>
						<dd>react-router</dd>
					</dl>
				</div>
			</Container>
		)
	}
}

export default AppHeader
