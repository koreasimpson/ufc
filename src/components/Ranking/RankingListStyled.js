import styled from "styled-components"

const StyledWrapper = styled.li`
	text-align: left;

	.groupTitle {
		text-transform: uppercase;
		color: ${({ theme }) => theme.majorColor};
	}

	.champion {
		p {
			margin-top: 10px;
		}

		dd {
			position: relative;
			height: 150px;
			border-bottom: 1px solid #eee;
			align-items: normal;

			figure {
				position: absolute;
				bottom: 0;
				right: 0;
				transition: transform 0.5s;
				transform-origin: bottom;
				width: 80%;

				&:hover {
					transform: scale(1.1);
				}

				img {
					width: 100%;
				}
			}
		}
	}

	dd {
		a {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 10px;
		}

		.rank {
			display: inline-block;
			width: 30px;
		}

		.name {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			display: inline-block;
			width: calc(100% - 60px);
			flex: 1;
		}
	}

	.icon {
		width: 30px;
		position: relative;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;

		i {
			display: inline-block;
			margin-right: 5px;
			border-right: 4px solid transparent;
			border-left: 4px solid transparent;
			width: 0;
			height: 0;
		}

		[class*="up"] {
			border-bottom: 6px solid #a3d20a;
			line-height: 10px;
		}

		[class*="down"] {
			border-top: 6px solid #d20a0a;
			line-height: 0;
		}

		[class*="new"] {
			&:after {
				content: "new";
				display: inline-block;
				font-size: 0.8rem;
				color: gold;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}

		[class*="equal"] {
			&:after {
				content: "-";
				display: inline-block;
				font-size: 0.8rem;
			}
		}
	}
`

export default StyledWrapper
