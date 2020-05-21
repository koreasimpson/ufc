import React, { Component, createRef } from "react"
import styled from "styled-components"

import { expEmail } from "assets/validation/validation"

const Container = styled.div`
	display: inline-block;
	position: relative;
	padding-bottom: 1.5rem;

	label {
		display: inline-block;
		position: relative;
		width: 300px;

		input {
			width: 100%;
			height: 100%;
			border-radius: 5px;
			box-sizing: border-box;
			padding: 1.5rem 5px 0.5rem;
			font-size: 1rem;
			border: 1px solid #eee;

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

export default class InputField extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.alert = createRef()
	}

	state = {
		value: "",
		validation: "null"
	}

	handleChange = e => {
		// const { value } = e.currentTarget

		let { type, value } = e.currentTarget
		value = value.trim()
		this.setState({
			value: value
		})
		if (!value) {
			this.alert.current.textContent = `${this.props.labelText}을(를) 입력해주세요`
			this.setState({
				validation: "empty"
			})
			return
		} else if (value && type === "email") {
			const result = expEmail.test(value)
			if (!result) {
				this.alert.current.textContent = "이메일 형식으로 입력해주세요"
				this.setState({
					validation: "notEmailForm"
				})
				return
			}
		}
		this.setState({
			validation: "pass"
		})
	}

	handleFocus = e => {}

	handleBlur = e => {}

	componentDidUpdate() {
		this.onChange(this.type, this.state.value, this.state.validation)
	}

	render() {
		const {
			onChange = () => {},
			children,
			className,
			labelText,
			type = "text",
			...rest
		} = this.props
		this.type = type
		this.onChange = onChange
		return (
			<Container className={(className, "inputField")}>
				<label htmlFor="">
					<input
						type={type}
						onFocus={this.handleFocus}
						onBlur={e => this.handleBlur(e)}
						onChange={e => this.handleChange(e)}
						className={this.state.validation}
						{...rest}
					/>
					<span className={this.state.value ? "small" : null}>{labelText}</span>
				</label>
				<p
					ref={this.alert}
					className="alert"
					hidden={this.state.validation === "pass" || this.state.validation === "null"}></p>
				{this.state.validation}
			</Container>
		)
	}
}
