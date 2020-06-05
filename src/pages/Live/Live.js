import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"

const Container = styled.main``

class Live extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { className } = this.props
		return (
			<Container className={className}>
				<AppHelmet metaData="Live" />
				<section className="contentWrap">
					<h2>
						<Trans i18nKey="pages.Live.h2" />
					</h2>
					<div>
						<Trans i18nKey="common.commingSoon" />
					</div>
				</section>
			</Container>
		)
	}
}

export default withTranslation()(Live)
