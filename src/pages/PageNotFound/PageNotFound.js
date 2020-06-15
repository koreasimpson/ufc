import React, { Component } from "react"
import { createPortal } from "react-dom"
import { Link } from "react-router-dom"
import StyledWrapper from "./PageNotFoundStyled"

class PageNotFound extends Component {
	render() {
		const { className } = this.props
		return createPortal(
			<StyledWrapper id="pageNotFound" className={className}>
				<div className="wrapper">
					<div className="h404" aria-label="404 Page Not Found">
						<span className="glitch" data-text="404">
							<span>4</span>
							<span>0</span>
							<span>4</span>
						</span>
					</div>
					<h1>
						<span>페</span>
						<span>이</span>
						<span>지</span>
						<span>를</span>
						<span> </span>
						<span>찾</span>
						<span>을</span>
						<span> </span>
						<span>수</span>
						<span> </span>
						<span>없</span>
						<span>습</span>
						<span>니</span>
						<span>다</span>
						<span>.</span>
						<span> </span>
					</h1>
					<Link to="/">
						<i aria-hidden="true">🏠</i> 홈 페이지로 이동
					</Link>
				</div>
			</StyledWrapper>,
			document.body
		)
	}
}

export default PageNotFound
