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
		const { className, t } = this.props
		const pageMetaData = {
			title: t("meta.Shop.title"),
			description: t("meta.Shop.description"),
			keywords: t("meta.Shop.keywords"),
			ogTitle: t("meta.Shop.ogTitle"),
			ogDescription: t("meta.Shop.ogDescription"),
			twitterTitle: t("meta.Shop.twitterTitle")
		}
		return (
			<Container className={className}>
				<AppHelmet pageData={pageMetaData} />
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
