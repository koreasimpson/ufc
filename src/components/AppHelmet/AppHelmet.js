import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { withTranslation } from "react-i18next"

class AppHelmet extends Component {
	constructor(props) {
		super(props)
		const { t, metaData = "Default" } = props
		this.pageMataData = {
			title: t(`meta.${metaData}.title`),
			description: t(`meta.${metaData}.description`),
			keywords: t(`meta.${metaData}.keywords`),
			ogTitle: t(`meta.${metaData}.ogTitle`),
			ogDescription: t(`meta.${metaData}.titogDescriptionle`),
			twitterTitle: t(`meta.${metaData}.twitterTitle`)
		}
	}

	render() {
		const { title, description, keywords, ogTitle, ogDescription, twitterTitle } = this.pageMataData
		return (
			<Helmet>
				<title>{`${title} | UFC`}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="twitter:title" content={`${twitterTitle} | UFC`} />
			</Helmet>
		)
	}
}

export default withTranslation()(AppHelmet)
