import "react-app-polyfill/ie11"
import "styles/index.scss"

import React from "react"
import ReactDOM from "react-dom"
// for github pages
import { HashRouter as Router } from "react-router-dom"
import styled from "styled-components"

import App from "components/App/App"
import * as serviceWorker from "config/serviceWorker"
import { Provider } from "react-redux"
import store from "store"
import "./i18n"

const StyledApp = styled(App)`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	main {
		flex: 1;
	}
`

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<StyledApp />
		</Router>
	</Provider>,
	document.getElementById("reactApp")
)

// 앱을 오프라인에서 작동시키고 보다 빠르게 로드 하고자 한다면?
// 아래 코드의 unregister()를 register()로 변경합니다.
// [⚠️주의! 이 방법은 몇 가지 문제를 발생할 수 있습니다.]
// 서비스 워커에 대해 자세히 알아보기: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === "production") {
	serviceWorker.register()
}
