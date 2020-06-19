import "react-app-polyfill/ie11"
import "antd/dist/antd.css"

import React from "react"
import ReactDOM from "react-dom"
// for github pages
import { HashRouter as Router } from "react-router-dom"

import App from "components/App/App"
import * as serviceWorker from "config/serviceWorker"
import { Provider } from "react-redux"
import store from "store"
import "./i18n"

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("reactApp")
)

if (process.env.NODE_ENV === "production") {
	serviceWorker.register()
}
