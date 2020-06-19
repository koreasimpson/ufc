// Layout type1은 랜딩 화면에 background 컨텐츠를 갖고 있음.
import React, { createContext, useContext } from "react"

import StyledWrapper from "./LayoutStyled"

const LayoutContext = createContext()
const LayoutProvider = props => (
	<LayoutContext.Provider value={props.value || {}}>{props.children}</LayoutContext.Provider>
)

const Layout = ({ hasLanding = false, children, ...restProps }) => {
	return (
		<LayoutProvider value={{ hasLanding }} {...restProps}>
			<StyledWrapper>{children}</StyledWrapper>
		</LayoutProvider>
	)
}

Layout.Landing = function LayoutLanding({
	headingText,
	backgroundImg,
	backgroundImgWidth,
	backgroundImgHeight,
	children
}) {
	const context = useContext(LayoutContext)
	const { hasLanding } = context
	return hasLanding ? (
		<section className="contentWrapper landing">
			<div className="content text">
				{headingText ? <h2 className="title">{headingText}</h2> : null}
				{children ? children : null}
			</div>
			<div
				className="content background"
				style={{
					backgroundImage: `url(${backgroundImg})`,
					paddingTop: `calc((${backgroundImgHeight} / ${backgroundImgWidth}) * 100%)`
				}}></div>
		</section>
	) : null
}

Layout.Content = function LayoutContent({ children }) {
	return <section className="contentWrapper default">{children}</section>
}

export default Layout
