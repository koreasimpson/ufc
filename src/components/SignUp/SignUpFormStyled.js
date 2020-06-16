import styled from "styled-components"
import { device } from "config/responsive"

const StyledWrapper = styled.main`
	form {
		max-width: 480px;
		margin: 0 auto;
		fieldset {
			border: none;
			padding: 0;
			&::after {
				content: "";
				display: block;
				width: 80%;
				height: 1px;
				margin: 0 auto;
				padding-bottom: 1.5rem;
				border-top: 1px solid #e7e7e7;
			}
		}

		.fieldWrapper {
			display: flex;

			& > div:nth-child(1) {
				margin-right: 10px;
			}
		}

		.sequrityQuestionContainer {
			select {
				width: 100%;
				height: 2rem;
				margin-bottom: 20px;
			}
		}

		.button.submit {
			margin-top: 20px;
			width: 300px;
			background-color: ${({ theme }) => theme.majorColor};
			border-radius: 12px;
			padding: 15px 0;
			box-sizing: border-box;
			color: #fff;
			font-size: 2rem;
			font-family: inherit;
		}

		.ant-alert {
			display: none;
			margin-top: 20px;
		}
	}

	@media screen and ${device.laptop} {
		form {
			min-width: 300px;
		}
	}

	@media screen and ${device.mobileTabletOnly} {
		form {
			width: 100%;

			.button.submit {
				width: 100%;
			}
		}
	}
`

export default StyledWrapper
