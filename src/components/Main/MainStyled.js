import styled from "styled-components"

const StyledWrapper = styled.main`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};

	.landing {
		dl {
			margin-top: 2rem;
			dt {
				font-size: 2rem;
				font-weight: bold;
				padding: 1rem;
				border: 1px solid #fff;
			}
			dd {
				font-size: 1.5rem;
				font-weight: bold;
				padding: 0.5rem;
			}
		}
	}

	.contentWrap {
		h3 {
			font-size: 2rem;
			margin-bottom: 2rem;
		}

		.ant-card {
			max-width: 80%;
			height: 100%;
			margin: 0 auto;
			color: ${({ theme }) => theme.textColor};
			background-color: ${({ theme }) => theme.bgColor};
		}

		.ant-card-body {
			text-align: left;
		}
	}
`
export default StyledWrapper
