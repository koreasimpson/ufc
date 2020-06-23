import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.li`
	position: relative;
	display: inline-block;
	width: 25%;
	min-height: 250px;
	cursor: pointer;
	transition: box-shadow 0.3s ease-in-out;
	transform-style: preserve-3d;
	perspective: 400px;
	box-sizing: border-box;
	margin-top: 2rem;

	&:hover,
	&:focus {
		animation: 0.3s hoverstyle alternate infinite;
		.front {
			transform: translateX(-50%) rotateY(180deg);
		}
		.back {
			transform: translateX(-50%) rotateY(360deg);
		}
	}

	.front,
	.back {
		width: 100%;
		margin: 0 auto;
		height: 100%;
		backface-visibility: hidden;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		transition: transform 0.8s;
	}

	.aka {
		letter-spacing: 0.1rem;
		color: #acadb1;
		margin-top: 10px;
	}
	.name {
		font-weight: bold;
		font-size: 1.3rem;
		margin-top: 10px;
	}
	.weightClass {
		text-transform: capitalize;
		font-size: 0.8rem;
		margin-top: 5px;
	}
	.record {
		color: #585b64;
		font-size: 0.8rem;
		margin-top: 5px;
	}
	.aka,
	.name,
	.record {
		white-space: nowrap;
	}

	.back {
		transform: translateX(-50%) rotateY(180deg);
		display: flex;
		flex-direction: column;

		.info {
			flex: 1;
			align-items: center;
			display: flex;
			justify-content: space-evenly;

			.left {
				.aka {
					font-size: 0.6rem;
				}
				.name {
					font-size: 0.7rem;
				}
				.buttonMoreInfo {
					position: relative;
					margin-top: 20px;
					display: inline-block;
					border: 1px solid ${({ theme }) => theme.textColor};
					padding: 10px;
					overflow: hidden;

					&:hover {
						border: none;
						&::after {
							left: 0;
						}
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

					span {
						position: relative;
						z-index: 1;
						transition: all 0.5s;
						color: ${({ theme }) => theme.textColor};
					}
				}
			}
			.right {
				padding: 5%;
				img {
					height: 170px;
				}
			}
		}
		.snsWrap {
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;

			dt {
				display: inline-block;
				margin-right: 15px;
			}

			dd {
				font-size: 0.7rem;
				display: inline-block;
				padding: 5px;
			}
		}
	}

	@keyframes hoverstyle {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.01);
		}
	}

	@media screen and ${device.mobileTabletOnly} {
		width: 100%;
		max-width: 320px;
	}
`

export default StyledWrapper
