import styled from "styled-components"
import { breakpoint, device } from "config/responsive"

const StyledWrapper = styled.main`
	.targetFighter.aka {
		font-size: 2rem;
	}
	.targetFighter.title {
		margin-top: 1rem;
	}
	.contentWrap {
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};

		.contentHeader,
		.contentBody {
			max-width: ${breakpoint.laptop}px;
			margin: 0 auto;
		}
		.contentHeader {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 20px;
			margin-bottom: 20px;
			border-bottom: 1px solid ${({ theme }) => theme.textColor};
		}
	}
	.searchForm {
		input {
			padding: 10px 20px;
			background-color: ${({ theme }) => (theme.value === "dark" ? theme.bgColor2 : theme.bgColor)};
			color: ${({ theme }) => theme.textColor};
			border: 1px solid #e7e7e7;
			border-radius: 5px;
		}
		.searchResultLength {
			display: inline-block;
			margin-right: 1rem;
		}
	}
	.fighterList {
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;

		.noFighter {
			font-size: 2rem;
			margin-top: 2rem;
			width: 100%;
			text-align: center;
		}
	}
	.goBack {
		padding: 1rem 1.5rem;
		font-size: 1.5rem;
		margin-top: 1.5rem;
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.majorColor};
	}

	@media screen and ${device.laptop} {
		.contentHeader {
			display: flex;
			justify-content: center;
			align-items: center;

			.ant-select {
				margin: 2rem;
			}
		}
	}

	@media screen and ${device.mobileTabletOnly} {
		.contentHeader {
			padding-top: 20px;
			flex-direction: column;

			& > * {
				margin-top: 15px;
			}

			.searchForm input {
				/* width: 150px; */
				width: 100%;
			}

			.ant-select {
				width: 100%;
			}
		}

		.fighterList {
			flex-wrap: nowrap;
			flex-direction: column;
			align-items: center;
		}
	}
`

export default StyledWrapper
