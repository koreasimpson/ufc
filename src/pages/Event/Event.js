import React, { Component } from "react"
import EventItem from "components/Event/EventItem"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import langdingBg from "assets/img/background_event.jpg"

const Container = styled.main`
	.landing {
		background-image: url(${langdingBg});
	}
	.contentWrap {
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
	}
	.category {
		text-align: center;
		li {
			display: inline-block;
			font-size: 3rem;
			font-weight: bold;
			padding-left: 20px;
			padding-right: 20px;
			color: ${({ theme }) => theme.textColor};
			opacity: 0.5;

			&.selected {
				color: ${({ theme }) => theme.majorColor};
				opacity: 1;
			}
		}
	}
`

const pageMetaData = {
	title: "이벤트",
	description: "UFC 이벤트 정보를 제공하는 페이지",
	keywords: "UFC, UFC event, UFC 이벤트",
	ogTItle: "UFC 이벤트",
	ogDescription: "UFC 이벤트 정보를 제공하는 페이지",
	twitterTitle: "UFC 이벤트"
}

export default class Event extends Component {
	render() {
		return (
			<Container className="">
				<AppHelmet pageData={pageMetaData} />
				<div className="landing bg">
					<p className="desc">UFC Fight Events</p>
					<div className="buttonWrap">
						<button>경기 상세 정보</button>
					</div>
				</div>
				<div className="contentWrap">
					<ul className="category">
						<li>
							<button>예정 이벤트</button>
						</li>
						<li>
							<button>과거 이벤트</button>
						</li>
					</ul>
					<ul>
						<EventItem eventNumber="" />
					</ul>
				</div>
			</Container>
		)
	}
}
