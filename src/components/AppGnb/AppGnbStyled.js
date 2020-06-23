import styled from "styled-components"

import { ReactComponent as ufc } from "assets/img/ufc.svg"
import { ReactComponent as arrow } from "assets/img/arrow.svg"
import { device } from "config/responsive"

export const StyledLogo = styled(ufc)`
	fill: ${({ theme }) => theme.logoColor};
`

export const StyledArrow = styled(arrow)`
	width: 1rem;
	height: 1rem;
	fill: ${({ theme }) => theme.textColor};
	vertical-align: middle;
	margin-left: 10px;
	transform: rotate(90deg);
`

const StyledWrapper = styled.nav`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	width: 1024px;
	transition: width 1s;
	z-index: 2;

	&.fixed {
		z-index: 100;
		position: fixed;
		top: 0px;
		width: 100vw;
		box-shadow: 0 -5px 10px 0px #000;

		.gnb .underline {
			width: 100%;
		}

		.gnb .account .depth2 {
			right: 15px;
		}
	}

	&.shadow {
		box-shadow: 0 0px 10px 0px #000;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		svg {
			display: inline-block;
			width: 80px;
			height: auto;
		}
	}

	.gnb {
		display: flex;

		li {
			&.align-right {
				margin-left: auto;
			}

			&.underline {
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				width: 0px;
				height: 2px;
				border-bottom: 4px solid #cc0b0b;
				padding: 0;
				transition: all 1s ease-in-out;
			}

			&.account {
				position: relative;

				.depth2 {
					color: ${({ theme }) => theme.textColor};
					background-color: ${({ theme }) => theme.bgColor};
					white-space: nowrap;

					.toggle {
						padding: 1rem;
						text-align: left;
					}
				}
			}

			a,
			.button.logout {
				padding: 1rem;
				display: inline-block;
			}
			a.active {
				color: #cc0b0b;
			}
		}
	}

	@media screen and ${device.laptop} {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);

		.gnb .account .depth2 {
			position: absolute;
			top: calc(100% + 10px);
			right: 0;
			background: inherit;
			color: inherit;
			text-align: center;
			box-shadow: 0 0 10px 0px ${({ theme }) => (theme === "light" ? theme.textColor : "#000")};
		}
	}
	@media screen and ${device.mobileTabletOnly} {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		width: 100%;

		.logo {
			position: static;
			transform: none;
		}
		.gnb {
			display: none;
			&.is-show {
				position: absolute;
				display: block;
				width: 100%;
				top: 67px;
				height: calc(100vh - 67px);
				left: 0;
				z-index: 2;
				background-color: ${({ theme }) => theme.bgColor};
			}

			a,
			button {
				width: 100%;
				height: 100%;
				font-size: 2rem;
				&:hover {
					background-color: ${({ theme }) => theme.textColor};
					color: ${({ theme }) => theme.bgColor};
				}
			}
		}
		.toggleGnb {
			display: block;
			font-size: 2rem;
		}
	}
`

export default StyledWrapper
