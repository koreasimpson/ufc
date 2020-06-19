import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.div`
	position: relative;
	text-align: center;
	width: 100%;

	.contentWrapper.landing {
		max-height: 100vh;
		overflow: hidden;
		position: relative;

		.content.text {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: #fff;
			font-size: 3rem;

			.title {
				font-size: 4rem;
				text-shadow: 0 1px 10px ${({ theme }) => theme.majorColor};
				white-space: nowrap;
				color: inherit;
			}
		}
		.content.background {
			background-size: contain;
			width: 100%;
			height: 0;
			text-align: center;
		}
	}

	.contentWrapper.default {
		padding-top: 100px;
		padding-bottom: 100px;

		h2 {
			padding-top: 100px;
			padding-bottom: 1rem;
			font-size: 4rem;
			color: ${({ theme }) => theme.textColor};
		}
	}

	@media screen and ${device.mobileTabletOnly} {
		.contentWrapper.default {
			padding-top: 60px;
			padding-bottom: 60px;
			padding-left: 10%; 
			padding-right: 10%; 

			h2 {
				padding-top: 1rem;
				padding-bottom: 1rem;
				/* font-size: 4rem; */
				/* color: ${({ theme }) => theme.textColor}; */
			}
		}
	}

	@media screen and ${device.mobileOnly} {
		.contentWrapper.landing {
			.content.text {
				.title {
					font-size: 2rem;
				}
			}
		}

		.contentWrapper.default {
			padding-top: 40px;
			padding-bottom: 40px;

			h2 {
				/* padding-top: 1rem; */
				/* padding-bottom: 1rem; */
				/* font-size: 4rem; */
				/* color: ${({ theme }) => theme.textColor}; */
			}
		}
	}
`

export default StyledWrapper
