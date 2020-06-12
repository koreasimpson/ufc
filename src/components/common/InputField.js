import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import StyledWrapper from "./InputFieldStyled"

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
