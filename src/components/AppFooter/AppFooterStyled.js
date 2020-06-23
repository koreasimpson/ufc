import styled from "styled-components"
import { ReactComponent as ufc } from "assets/img/ufc.svg"
import { device } from "config/responsive"

export const StyledLogo = styled(ufc)`
	fill: ${({ theme }) => theme.logoColor};
`

const StyledWrapper = styled.footer`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	border-top: 5px solid ${({ theme }) => theme.majorColor};
	padding: 5rem 2rem;
	display: flex;
	justify-content: space-between;
	position: relative;

	h2 {
		margin: 0;
		svg {
			height: 2rem;
			width: 5rem;
		}
	}

	.ant-select {
		margin-top: 10px;
	}

	#languageOptions {
		vertical-align: bottom;
		margin-left: 2rem;
	}

	.footer-navigation {
		display: flex;
		width: 399px;
		justify-content: space-evenly;
		dl {
			flex: 1;
			dt {
				font-size: 1.5rem;
			}
			dd {
				margin-top: 1rem;
			}
		}
	}

	.copyright {
		position: absolute;
		left: 2rem;
		bottom: 5rem;
	}

	@media screen and ${device.mobileOnly} {
		display: block;

		h2 {
			display: inline-block;
		}

		.ant-select {
			margin-top: 0;
			margin-left: 15px;
			vertical-align: text-bottom;
		}

		.footer-navigation {
			width: 100%;
			margin-top: 15px;
		}

		.copyright {
			bottom: 2rem;
		}
	}
`

export default StyledWrapper
