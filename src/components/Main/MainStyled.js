import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.main`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};

	.desc {
		white-space: nowrap;
	}

	dl {
		margin-top: 2rem;
		dt {
			font-size: 2rem;
			font-weight: bold;
			padding: 1rem;
			border: 1px solid #fff;
		}
		dd {
			font-size: 1.5rem;
			font-weight: bold;
			padding: 0.5rem;
		}
	}

	h3 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.githubLink {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
	}

	.ant-card {
		max-width: 80%;
		height: 100%;
		margin: 0 auto;
		color: ${({ theme }) => theme.textColor};
		background-color: ${({ theme }) => theme.bgColor};
	}
	.ant-card-head {
		color: inherit;
	}
	.ant-card-body {
		text-align: left;
		li {
			list-style: decimal;
			&:not(:nth-child(1)) {
				margin-top: 10px;
			}
		}
	}

	@media screen and ${device.mobileOnly} {
		.contentWrapper .content {
			width: 100%;
			padding: 0 10%;

			.desc {
				font-size: 2rem;
				white-space: normal;
			}

			dl {
				dt {
					font-size: 1.5rem;
					padding: 0.5rem;
				}
				dd {
					font-size: 1rem;
					padding: 0.5rem;
					display: inline-block;
				}
			}
		}
	}
`
export default StyledWrapper
