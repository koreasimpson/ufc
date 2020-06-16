import styled from "styled-components"
import { device } from "config/responsive"
import langdingBg from "assets/img/background_event.jpg"

const StyledWrapper = styled.main`
	.landing {
		background-image: url(${langdingBg});
	}
	.contentWrap {
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
	}
	.category {
		text-align: center;
		button {
			display: inline-block;
			font-size: 3rem;
			font-weight: bold;
			padding-left: 20px;
			padding-right: 20px;
			color: ${({ theme }) => theme.textColor};

			&.selected {
				color: ${({ theme }) => theme.majorColor};
				border-bottom: 1px solid ${({ theme }) => theme.majorColor};
			}
		}
	}
	.eventItemList {
		margin-top: 80px;
	}

	@media screen and ${device.mobileTabletOnly} {
		.category {
			margin-top: 3rem;
		}
		.eventItemList {
			margin-top: 5rem;
		}
	}

	@media screen and ${device.mobileOnly} {
		.category {
			display: flex;
		}
	}
`

export default StyledWrapper
