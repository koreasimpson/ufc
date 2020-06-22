import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.main`
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

	.noEvent {
		font-size: 2rem;
	}

	@media screen and ${device.mobileTabletOnly} {
		.eventItemList {
			margin-top: 5rem;
		}
	}

	@media screen and ${device.mobileOnly} {
		.eventItemList {
			margin-top: 3rem;
		}
		.category {
			display: flex;
			justify-content: center;
			button {
				font-size: 2rem;
			}
		}
	}
`

export default StyledWrapper
