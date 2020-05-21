import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { withRouter } from "react-router-dom"

import ThemeStyle from "theme/theme"
import AppHeader from "components/AppHeader/AppHeader"
import AppMain from "components/AppMain/AppMain"
import AppFooter from "components/AppFooter/AppFooter"

// components
const App = props => {
	console.log("app props =", props)
	const [themeState, setTheme] = useState({
		default: true,
		theme: ThemeStyle.lightMode
	})

	const toggleTheme = () => {
		themeState.default
			? setTheme({ default: false, theme: ThemeStyle.darkMode })
			: setTheme({ default: true, theme: ThemeStyle.lightMode })
	}

	return (
		<ThemeProvider theme={themeState.theme}>
			{/* <label htmlFor="Theme">
				<input id="Theme" type="checkbox" onChange={toggleTheme} />
				Theme 설정하기 {themeState.default ? "true" : "false"}
			</label> */}
			<AppHeader props={props} />
			<AppMain test="hello" />
			<AppFooter />
		</ThemeProvider>
	)
}

export default withRouter(App)
