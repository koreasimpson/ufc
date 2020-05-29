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
		const { className, t } = this.props
		const pageMetaData = {
			title: t("meta.Live.title"),
			description: t("meta.Live.description"),
			keywords: t("meta.Live.keywords"),
			ogTitle: t("meta.Live.ogTitle"),
			ogDescription: t("meta.Live.ogDescription"),
			twitterTitle: t("meta.Live.twitterTitle")
		}
		return (
			<Container className={className}>
				<AppHelmet pageData={pageMetaData} />
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
