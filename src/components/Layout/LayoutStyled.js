import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.div`
	position: relative;
	.contentWrapper.landing {
		max-height: 100vh;
		overflow: hidden;
		position: relative;

		.content.text {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.title {
				font-size: 4rem;
				text-shadow: 0 1px 10px ${({ theme }) => theme.majorColor};
				color: #fff;
				white-space: nowrap;
			}

			.desc {
				font-size: 3rem;
				font-weight: bold;
				text-shadow: 1px 1px 1px ${({ theme }) => theme.majorColor};
				padding: 0 10%;
			}
		}
		.content.background {
			background-size: contain;
			width: 100%;
			height: 0;
			text-align: center;
		}
	}

	.contentWapper.default {
	}

	@media screen and ${device.mobileTabletOnly} {
	}

	@media screen and ${device.mobileOnly} {
		.contentWrapper.landing {
			.content.text {
				.title {
					font-size: 3rem;
				}
			}
		}
	}
`

export default StyledWrapper
