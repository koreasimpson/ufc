import React from "react"
import { ThemeProvider } from "styled-components"
import { withRouter } from "react-router-dom"
import { CookiesProvider, useCookies } from "react-cookie"
import { connect } from "react-redux"

import AppHeader from "components/AppHeader/AppHeader"
import AppMain from "components/AppMain/AppMain"
import AppFooter from "components/AppFooter/AppFooter"
import Modal from "components/Common/Modal"
import ThemeSelect from "components/ModalContents/ThemeSelect"
import ThemeStyle from "theme/theme"
import store from "store"
import { Trans } from "react-i18next"

// components
const App = props => {
	const [cookies, setCookie] = useCookies(["name"])
	let theme

	if (cookies.theme) {
		theme = cookies.theme
	} else {
		theme = store.getState().themeReducer.theme
	}

	const setThemeCookies = () => {
		if (!cookies.theme) {
			const dayTime = 86400000
			let expireDate = new Date()
			expireDate.setTime(expireDate.getTime() + 7 * dayTime)
			setCookie("theme", theme, { path: "/", expires: expireDate })
		}
	}

	return (
		<CookiesProvider>
			<ThemeProvider theme={ThemeStyle[theme]}>
				<div className={props.className}>
					<AppHeader props={props} />
					<AppMain test="hello" />
					<AppFooter />
					<Modal open={!cookies.theme} closeButton handleConfirm={setThemeCookies}>
						<Modal.Header>
							<Trans i18nKey="modal.theme.header" />
						</Modal.Header>
						<Modal.Contents>
							<ThemeSelect />
						</Modal.Contents>
						<Modal.Footer />
					</Modal>
				</div>
			</ThemeProvider>
		</CookiesProvider>
	)
}

const mapStateToProps = state => ({
	theme: state.themeReducer.theme
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
