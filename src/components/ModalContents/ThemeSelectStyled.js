import styled from "styled-components"
import { ReactComponent as ufc } from "assets/img/ufc.svg"

export const LightThemeLogo = styled(ufc)`
	fill: ${({ theme }) => theme.logoColor};
	width: 80px;
`

export const DarkThemeLogo = styled(ufc)`
	fill: ${({ theme }) => theme.majorColor};
	width: 80px;
`

const StyledWrapper = styled.div`
	ul {
		display: flex;
	}
	.item {
		flex: 1;
		display: flex;
		height: 200px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #000;
		cursor: pointer;
		box-sizing: border-box;

		&.selected {
			position: relative;
			z-index: 1;
			box-shadow: 0px 0px 5px 3px ${({ theme }) => theme.majorColor};
		}

		&.light {
			background-color: #fff;
			color: #000;

			svg {
				fill: #000;
			}
		}

		&.dark {
			background-color: #202020;
			color: #909090;

			svg {
				fill: ${({ theme }) => theme.majorColor};
			}
		}

		svg {
			display: block;
		}

		label {
			margin-top: 50px;
		}
	}

	.refText {
		margin-top: 10px;
	}
`

export default StyledWrapper
