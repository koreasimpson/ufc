import styled from "styled-components"

import { device } from "config/responsive"

const StyledWrapper = styled.main`
	form {
		position: relative;
		display: inline-block;

		& [class*="Field"] {
			width: 100%;
		}

		button {
			margin-top: 20px;
			width: 300px;
			background-color: ${({ theme }) => theme.majorColor};
			color: #fff;
			border-radius: 12px;
			padding: 15px 0;
			box-sizing: border-box;
			font-size: 2rem;
			font-family: inherit;
		}

		.ant-alert {
			display: none;
			margin-bottom: 1rem;
		}

		.signup {
			display: block;
			font-size: 1rem;
			text-decoration: underline;
			margin-top: 20px;
		}
	}

	.testAccount {
		margin-top: 20px;
	}
`
export default StyledWrapper
