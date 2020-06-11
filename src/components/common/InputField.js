import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
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

	.alert {
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
	}
`

class InputField extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	static defaultProps = {
		handleChange: () => {},
		handleBlur: () => {}
	}

	render() {
		const { labelText, type, name, value, error, errorText, handleChange, handleBlur } = this.props
		return (
			<StyledWrapper className={`inputField ${error ? "error" : value.length ? "pass" : null}`}>
				<div className="inputWrapper">
					<input
						type={type}
						name={name}
						value={value}
						onChange={e => handleChange(name, e.target.value)}
						onBlur={e => handleBlur(name, e.target.value)}
					/>
					<span className={`labelText ${value.length ? "small" : null}`}>
						<Trans i18nKey={`components.InputField.labelText.${labelText}`} />
					</span>
				</div>
				<p className="alert">! {errorText}</p>
			</StyledWrapper>
		)
	}
}

export default withTranslation()(InputField)
