import React, { createRef } from "react"
import styled from "styled-components"

import store from "store"
import { ReactComponent as ufc } from "assets/img/ufc.svg"
import { SET_THEME_LIGHT, SET_THEME_DARK } from "store/actions/theme"
import { withTranslation, Trans } from "react-i18next"

const LightTheme = styled(ufc)`
	fill: ${({ theme }) => theme.logoColor};
	width: 80px;
`

const DarkTheme = styled(ufc)`
	fill: ${({ theme }) => theme.majorColor};
	width: 80px;
`

const Container = styled.div`
	ul {
		display: flex;
	}
	.item {
		flex: 1;
		display: flex;
		height: 200px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #000;
		cursor: pointer;
		box-sizing: border-box;

		&.selected {
			position: relative;
			z-index: 1;
			box-shadow: 0px 0px 5px 3px ${({ theme }) => theme.majorColor};
		}

		&.light {
			background-color: #fff;
			color: #000;

			svg {
				fill: #000;
			}
		}

		&.dark {
			background-color: #202020;
			color: #909090;

			svg {
				fill: ${({ theme }) => theme.majorColor};
			}
		}

		svg {
			display: block;
		}

		label {
			margin-top: 50px;
		}
	}

	.refText {
		margin-top: 10px;
	}
`

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
		<Container>
			<ul>
				<li
					ref={lightThemeItem}
					className={`${theme === "light" ? "selected" : null} item light`}
					onClick={e => {
						selectedTheme(e)
					}}>
					<LightTheme />
					<label>
						<Trans i18nKey="common.lightTheme" />
					</label>
				</li>
				<li
					ref={darkThemeItem}
					className={`${theme === "dark" ? "selected" : null} item dark`}
					onClick={e => {
						selectedTheme(e)
					}}>
					<DarkTheme />
					<label>
						<Trans i18nKey="common.darkTheme" />
					</label>
				</li>
			</ul>
			{/* <p className="refText">* 테마는 Footer에서 다시 설정할 수 있습니다.</p> */}
		</Container>
	)
}

export default withTranslation()(ThemeSelect)
