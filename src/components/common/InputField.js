import React, { Component } from "react"
import { withTranslation, Trans } from "react-i18next"
import StyledWrapper from "./InputFieldStyled"
import { Tooltip } from "antd"

class InputField extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	static defaultProps = {
		errorText: "",
		handleChange: () => {},
		handleBlur: () => {}
	}

	render() {
		const {
			t,
			tReady,
			labelText,
			type,
			name,
			value,
			error,
			errorText,
			tooltipText,
			handleChange,
			handleBlur,
			...rest
		} = this.props
		return (
			<StyledWrapper className={`inputField ${error ? "error" : value.length ? "pass" : null}`}>
				<div className="inputWrapper">
					{tooltipText ? (
						<Tooltip title={tooltipText} placement="topRight" trigger={["focus"]}>
							<input
								type={type}
								name={name}
								value={value}
								onChange={e => handleChange(name, e.target.value)}
								onBlur={e => handleBlur(name, e.target.value)}
								{...rest}
							/>
						</Tooltip>
					) : (
						<input
							type={type}
							name={name}
							value={value}
							onChange={e => handleChange(name, e.target.value)}
							onBlur={e => handleBlur(name, e.target.value)}
							{...rest}
						/>
					)}
					<span className={`labelText ${value.length ? "small" : null}`}>
						<Trans i18nKey={`components.InputField.labelText.${labelText}`} />
					</span>
				</div>
				<p className="alert" hidden={errorText.length === 0}>
					! {errorText}
				</p>
			</StyledWrapper>
		)
	}
}

export default withTranslation()(InputField)
