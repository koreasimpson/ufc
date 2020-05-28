import React, { Component, createRef } from "react"
import styled from "styled-components"
import { expEmail, expPhone } from "assets/lib/validation"
import { connect } from "react-redux"
import { withTranslation, Trans } from "react-i18next"

const Container = styled.div`
	display: inline-block;
	position: relative;
	padding-bottom: 1.5rem;
	flex: 1;

	label {
		display: inline-block;
		position: relative;
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
	}

	.alert {
		position: absolute;
		left: 10px;
		bottom: 0;
		font-size: 1rem;
		color: red;
	}
`

class InputField extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.alert = createRef()
	}

	state = {
		value: "",
		name: "",
		validation: "null"
	}

	handleChange = e => {
		let { value, name } = e.currentTarget
		value = value.trim()
		this.setState({
			value,
			name
		})
		if (!value) {
			// this.alert.current.textContent = `${this.props.labelText}을(를) 입력해주세요`
			const labelText = this.props.t(`components.InputField.labelText.${this.props.labelText}`)
			this.alert.current.textContent = this.props.t("components.InputField.validation.empty", {
				labelText
			})
			this.setState({
				validation: "empty"
			})
			return
		} else if (value && name === "email") {
			const result = expEmail.test(value)
			if (!result) {
				this.alert.current.textContent = this.props.t("components.InputField.validation.emailForm")
				this.setState({
					validation: "notEmailForm"
				})
				return
			}
		} else if (value && name === "phone") {
			this.setState({
				value: value.replace(expPhone, "")
			})
		}
		this.setState({
			validation: "pass"
		})
	}

	handleFocus = e => {}

	handleBlur = (e, propsBlur) => {
		if (propsBlur && !propsBlur.valid && propsBlur.validationText) {
			this.setState({
				validation: "notValid"
			})
			this.alert.current.textContent = propsBlur.validationText
		}
	}

	componentDidUpdate() {
		this.onChange(this.state.value, this.state.name, this.state.validation)
	}

	render() {
		const {
			t,
			tReady: tready,
			type = "text",
			name = "input",
			labelText,
			className,
			children,
			onChange = () => {},
			onBlur = () => {},
			...rest
		} = this.props
		this.type = type
		this.name = name
		this.onChange = onChange

		return (
			<Container className={(className, "inputField")}>
				<label htmlFor="">
					<input
						type={type}
						name={name}
						onFocus={this.handleFocus}
						onBlur={e => this.handleBlur(e, onBlur())}
						onChange={e => this.handleChange(e)}
						className={this.state.validation}
						value={this.state.value}
						{...rest}
					/>
					<span className={this.state.value ? "small" : null}>
						<Trans i18nKey={`components.InputField.labelText.${labelText}`} />
					</span>
				</label>
				<p
					ref={this.alert}
					className="alert"
					hidden={this.state.validation === "pass" || this.state.validation === "null"}></p>
			</Container>
		)
	}
}

const TransInputField = withTranslation()(InputField)

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TransInputField)
