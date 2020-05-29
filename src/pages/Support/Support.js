import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { withTranslation, Trans } from "react-i18next"

const Container = styled.main``

class Support extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { className, t } = this.props
		const pageMetaData = {
			title: t("meta.Support.title"),
			description: t("meta.Support.description"),
			keywords: t("meta.Support.keywords"),
			ogTitle: t("meta.Support.ogTitle"),
			ogDescription: t("meta.Support.ogDescription"),
			twitterTitle: t("meta.Support.twitterTitle")
		}

		return (
			<Container className={className}>
				<AppHelmet pageData={pageMetaData} />
				<section className="contentWrap">
					<h2>
						<Trans i18nKey="pages.Support.h2" />
					</h2>
				</section>
			</Container>
		)
	}
}

export default withTranslation()(Support)
