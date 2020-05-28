import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import { withTranslation } from "react-i18next"

class AppHelmet extends Component {
	constructor(props) {
		super(props)
		this.pageData = props.pageData ? props.pageData : []
	}
	render() {
		const { t } = this.props

		const {
			title = t("components.AppHelmet.title"),
			description = t("components.AppHelmet.description"),
			keywords = t("components.AppHelmet.keywords"),
			ogTitle = t("components.AppHelmet.ogTitle"),
			ogDescription = t("components.AppHelmet.titogDescriptionle"),
			twitterTitle = t("components.AppHelmet.twitterTitle")
		} = this.pageData
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

const TransAppHelmet = withTranslation()(AppHelmet)

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransAppHelmet)
