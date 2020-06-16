import React, { createRef } from "react"
import store from "store"
import { withTranslation, Trans } from "react-i18next"

import { SET_THEME_LIGHT, SET_THEME_DARK } from "store/actions/theme"
import StyledWrapper, { LightThemeLogo, DarkThemeLogo } from "./ThemeSelectStyled"

const ThemeSelect = () => {
	const lightThemeItem = createRef()
	const darkThemeItem = createRef()
	const { theme } = store.getState().themeReducer

	const selectedTheme = e => {
		if (e.currentTarget.classList.contains("light")) {
			store.dispatch({ type: SET_THEME_LIGHT })
		} else {
			store.dispatch({ type: SET_THEME_DARK })
		}
	}

	return (
		<StyledWrapper>
			<ul>
				<li
					ref={lightThemeItem}
					tabIndex="0"
					className={`${theme === "light" ? "selected" : null} item light`}
					onClick={e => {
						selectedTheme(e)
					}}>
					<LightThemeLogo />
					<label>
						<Trans i18nKey="common.lightTheme" />
					</label>
				</li>
				<li
					ref={darkThemeItem}
					tabIndex="0"
					className={`${theme === "dark" ? "selected" : null} item dark`}
					onClick={e => {
						selectedTheme(e)
					}}>
					<DarkThemeLogo />
					<label>
						<Trans i18nKey="common.darkTheme" />
					</label>
				</li>
			</ul>
		</StyledWrapper>
	)
}

export default withTranslation()(ThemeSelect)
