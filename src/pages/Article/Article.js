import React, { Component } from "react"
import AppHelmet from "components/AppHelmet/AppHelmet"
import styled from "styled-components"
import { withTranslation } from "react-i18next"

const Container = styled.main``

class Article extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { className, t } = this.props
		const pageMetaData = {
			title: t("meta.Article.title"),
			description: t("meta.Article.description"),
			keywords: t("meta.Article.keywords"),
			ogTitle: t("meta.Article.ogTitle"),
			ogDescription: t("meta.Article.ogDescription"),
			twitterTitle: t("meta.Article.twitterTitle")
		}
		return (
			<Container className={className}>
				<AppHelmet pageData={pageMetaData} />
				<section className="contentWrap">
					<h2>비디오, 기사 및 갤러리</h2>
					<div>준비중</div>
				</section>
			</Container>
		)
	}
}

export default withTranslation()(Article)
