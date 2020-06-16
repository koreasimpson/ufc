import styled from "styled-components"
import { breakpoint, device } from "config/responsive"
import langdingBg from "assets/img/background_fighters.jpg"

const StyledWrapper = styled.main`
	.landing {
		background-image: url(${langdingBg});
	}
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
	}
	.goBack {
		padding: 15px 35px;
		transform: translateY(8rem);
		background-color: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.majorColor};
	}

	@media screen and ${device.mobileTabletOnly} {
		.contentHeader {
			padding-top: 20px;
			flex-direction: column;

			& > * {
				margin-top: 15px;
			}

			.searchForm input {
				width: 150px;
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
