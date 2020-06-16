import styled from "styled-components"

const StyledWrapper = styled.div`
	position: relative;
	display: inline-block;
	padding-bottom: 1rem;
	width: 100%;
	flex: 1;

	&.error {
		input {
			border: 1px solid red;
		}
		.alert {
			display: flex;
		}
	}
	&.pass {
		input {
			border: 1px solid green;
		}
	}

	.inputWrapper {
		position: relative;
	}

	input {
		width: 100%;
		height: 100%;
		border-radius: 5px;
		box-sizing: border-box;
		padding: 1.5rem 5px 0.5rem;
		font-size: 1rem;
		border: 1px solid #e7e7e7;

		&:focus {
			& + .labelText {
				top: 5px;
				left: 5px;
				font-size: 1rem;
				transform: none;
			}
		}
	}

	.labelText {
		transition: all 0.3s;
		position: absolute;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);
		font-size: 1.5rem;
		color: #86868b;

		&.small {
			top: 5px;
			left: 5px;
			font-size: 1rem;
			transform: none;
		}
	}

	/* .alert {
		white-space: nowrap;
		display: none;
		align-items: center;
		width: 90%;
		height: 2rem;
		margin: 1rem auto 0;
		color: red;
		font-size: 1rem;
		text-indent: 10px;
		border-radius: 5px;
		box-sizing: border-box;
		background-color: ${({ theme }) => theme.errorBgColor};
	} */
`

export default StyledWrapper
