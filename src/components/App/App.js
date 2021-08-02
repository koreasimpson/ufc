import React, { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import { withRouter } from "react-router-dom"
import { CookiesProvider, useCookies } from "react-cookie"
import { connect } from "react-redux"
import { Trans } from "react-i18next"
import { BackTop } from "antd"
import { UpSquareFilled } from "@ant-design/icons"

import { GlobalStyle } from "styles/globalStyle"
import AppHeader from "components/AppHeader/AppHeader"
import AppMain from "components/AppMain/AppMain"
import AppFooter from "components/AppFooter/AppFooter"
import Modal from "components/common/Modal"
import ThemeSelect from "components/ModalContents/ThemeSelect"
import ThemeStyle from "theme/theme"

const App = props => {
	const [cookies, setCookie] = useCookies(["name"])
	const theme = props.theme || cookies.nzcUfcTheme

	const setThemeCookies = () => {
		const dayTime = 86400000
		let expireDate = new Date()
		expireDate.setTime(expireDate.getTime() + 7 * dayTime)
		setCookie("nzcUfcTheme", theme, { path: "/", expires: expireDate })
	}

	return (
		<CookiesProvider>
			<ThemeProvider theme={ThemeStyle[theme]}>
				<GlobalStyle />
				<Fragment>
					<AppHeader props={props} />
					<AppMain />
					<AppFooter />
					<Modal open={!cookies.nzcUfcTheme} handleConfirm={setThemeCookies}>
						<Modal.Header>
							<Trans i18nKey="modal.theme.header" />
						</Modal.Header>
						<Modal.Contents>
							<ThemeSelect />
						</Modal.Contents>
						<Modal.Footer />
					</Modal>
					<BackTop>
						<UpSquareFilled style={{ fontSize: "50px", color: "#CC0B0B" }} />
					</BackTop>
				</Fragment>
			</ThemeProvider>
		</CookiesProvider>
	)
}

const mapStateToProps = state => ({
	theme: state.themeReducer.theme
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
