import styled from "styled-components"

const StyledWrapper = styled.div`
	display: inline-block;
	position: relative;
	padding-bottom: 32px;
	flex: 1;
	width: 100%;

	input {
		width: 100%;
		height: 100%;
		border-radius: 5px;
		box-sizing: border-box;
		padding: 1.5rem 5px 0.5rem;
		font-size: 1rem;
		border: 1px solid #e7e7e7;

		&:not(.null):not(.pass) {
			border: 1px solid red;
		}
	}

	input:focus {
		& + span {
			top: 5px;
			left: 5px;
			font-size: 1rem;
			transform: none;
		}
	}

	span {
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

	.alert {
		position: absolute;
		left: 10px;
		bottom: 10px;
		font-size: 1rem;
	}
`

export default StyledWrapper
