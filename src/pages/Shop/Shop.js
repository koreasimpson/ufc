import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"

const Container = styled.main``

class Shop extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { className } = this.props
		return (
			<Container className={className}>
				<AppHelmet metaData="Shop" />
				<section className="contentWrap">
					<h2>
						<Trans i18nKey="pages.Shop.h2" />
					</h2>
				</section>
			</Container>
		)
	}
}

export default withTranslation()(Shop)
