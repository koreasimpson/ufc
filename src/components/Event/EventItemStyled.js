import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 160px;
	padding: 1rem 2rem;
	margin: 0 auto;
	margin-top: 1rem;
	border-top: 1px solid ${({ theme }) => theme.textColor};
	border-bottom: 1px solid ${({ theme }) => theme.textColor};
	box-sizing: border-box;

	&:hover {
		border: 1px solid ${({ theme }) => theme.majorColor};
		box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.majorColor} inset;

		.moreInfo {
			border: 1px solid ${({ theme }) => theme.bgColor};

			span {
				position: relative;
				color: #fff;
				z-index: 1;
			}

			&::after {
				left: 0;
			}
		}
	}

	.eventType,
	.moreInfo {
		width: 150px;
	}
	.fighterProfile,
	.eventInfo {
		flex: 1;
	}

	.eventType {
		text-align: center;
		.ufc {
			font-size: 1.2rem;
			font-weight: bold;
			display: block;
		}
		i {
			font-size: 0.8rem;
		}
		strong {
			text-decoration: underline;
			font-size: 0.6rem;
			transform: translateY(-2px);
			position: relative;
			display: inline-block;
		}
	}

	.fighterProfile {
		display: flex;
		justify-content: center;
		img {
			height: 160px;
			padding: 10px 15px;
		}
		img.have {
			width: 150px;
			height: auto;
			padding: 0;
		}
	}

	.moreInfo {
		border: 1px solid ${({ theme }) => theme.textColor};
		background-color: ${({ theme }) => theme.bgColor};
		padding: 15px;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;

		span {
			position: relative;
			z-index: 1;
			transition: all 0.5s;
		}

		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0%;
			left: -100%;
			background-color: ${({ theme }) => theme.majorColor};
			transition: all 0.5s;
		}

		/* &:hover {
			border: 1px solid ${({ theme }) => theme.bgColor};

			span {
				position: relative;
				color: ${({ theme }) => theme.bgColor};
				z-index: 1;
			}

			&::after {
				left: 0;
			}
		} */
	}

	@media screen and ${device.mobileTabletOnly} {
		flex-direction: column;
		height: inherit;

		& > * {
			margin-top: 1.5rem;
		}

		.eventInfo > * {
			margin-top: 1rem;
		}
	}

	@media screen and ${device.mobileOnly} {
		.fighterProfile {
			img,
			img.have {
				width: 50%;
				height: auto;
			}
		}
	}
`

export default StyledWrapper
