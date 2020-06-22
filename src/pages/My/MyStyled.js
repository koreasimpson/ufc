import styled from "styled-components"

const StyledWrapper = styled.main`
	form {
		max-width: 480px;
		min-width: 300px;
		width: 100%;
		margin: 0 auto;
		fieldset {
			border: none;

			legend {
				padding: 10px 0;
			}

			&:disabled {
				input {
					border-color: #e7e7e7;
				}
			}

			&:not(:disabled) {
				input[name="account"] {
					opacity: 0.3;
				}
			}
		}
	}

	.fieldWrapper {
		display: flex;

		& > div:nth-of-type(1) {
			margin-right: 10px;
		}
	}

	.buttonWrapper {
		button {
			padding: 10px 20px;
			border-radius: 5px;
			background-color: ${({ theme }) => theme.majorColor};
			color: #fff;

			&:nth-child(1) {
			}
			&:nth-child(2) {
				margin-left: 20px;
			}
		}
	}

	.ant-alert {
		display: none;
		margin-top: 1rem;
	}
`

export default StyledWrapper
