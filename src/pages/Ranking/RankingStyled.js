import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.main`
	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		max-width: 1024px;
		margin: 0 auto;
	}
	.group {
		width: 25%;
		min-width: 250px;
		padding: 20px;
		box-sizing: border-box;
	}

	@media screen and ${device.mobileTabletOnly} {
		.content {
			justify-content: space-evenly;
		}
	}

	@media screen and ${device.mobileOnly} {
		.content {
			justify-content: space-evenly;
		}
	}
`

export default StyledWrapper
