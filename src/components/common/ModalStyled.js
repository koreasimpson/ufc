import styled from "styled-components"

const StyledWrapper = styled.div`
	&[hidden] {
		display: none;
	}

	article {
		position: relative;
		width: 50vw;
		min-width: 280px;
		min-height: 100px;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.modalHeader {
			padding: 1rem 1.4rem;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			color: #000;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.modalContents {
			padding: 1rem 1.4rem;
			flex: 1;
		}

		.modalFooter {
			display: flex;
			height: 50px;
			button {
				flex: 1;
				height: 100%;
				border: none;
				font-size: 1rem;
				font-family: inherit;

				&:nth-child(1) {
					background-color: ${({ theme }) => theme.majorColor};
					color: #fff;
				}

				&:nth-child(2) {
					background-color: #e7e7e7;
				}
			}
		}

		.headerCloseButton {
			cursor: pointer;
			width: 1.6rem;
			height: 1.6rem;
			border: 0;
			border-radius: 3px;
			padding: 0;
			font-size: 1.5rem;

			&:hover {
				background: rgba(147, 141, 175, 0.2);
			}

			&:focus {
				outline: none;
				box-shadow: 0 0 0 3px rgba(15, 55, 235, 0.65);
			}
		}
	}
`

export default StyledWrapper
