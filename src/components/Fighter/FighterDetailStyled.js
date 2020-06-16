import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.div`
	h3 {
		font-size: 5rem;
	}

	dt {
		font-size: 1rem;
		color: #585b64;
	}
	dd {
		font-size: 1.5rem;
		text-transform: uppercase;
		margin-top: 1rem;
	}

	.record {
		display: flex;
		justify-content: space-evenly;
	}

	.detailInfo {
		display: flex;
		min-height: 60vh;
		margin-top: 3rem;

		.left,
		.right {
			flex: 1;
		}

		.left {
			img {
				height: 100%;
			}
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;

			.breakLine {
				display: flex;
				text-align: left;
				padding: 20px 0;
				border-bottom: 1px solid #eee;

				div {
					flex: 1;
				}
			}
		}
	}

	.commentWrap {
		margin-top: 20px;
		line-height: 1.5rem;
	}

	[shortname="ufc"] {
		width: 100%;
		margin: 0 auto;
		max-width: 800px;
	}

	@media screen and ${device.mobileTabletOnly} {
		margin-top: 20px;

		.detailInfo {
			flex-direction: column;
			margin-top: 20px;

			dd {
				font-size: 1rem;
			}
		}
	}
`

export default StyledWrapper
