import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

const Container = styled.div`
	&[hidden] {
		display: none;
	}

	article {
		position: relative;
		width: 50vw;
		min-width: 480px;
		min-height: 100px;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.header {
			padding: 1rem 1.4rem;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		}

		.contents {
			padding: 1rem 1.4rem;
			flex: 1;
		}

		.footer {
			display: flex;
			height: 50px;
			button {
				flex: 1;
				height: 100%;
				border: none;
				font-size: 1rem;
				font-family: inherit;

				&:nth-child(1) {
					background-color: ${({ theme }) => theme.majorColor};
					color: #fff;
				}

				&:nth-child(2) {
					background-color: #e7e7e7;
				}
			}
		}

		.closeButton {
			cursor: pointer;
			position: absolute;
			top: 1rem;
			right: 1rem;
			width: 1.6rem;
			height: 1.6rem;
			border: 0;
			border-radius: 3px;
			padding: 0;
			font-size: 1.5rem;

			&:hover {
				background: rgba(147, 141, 175, 0.2);
			}

			&:focus {
				outline: none;
				box-shadow: 0 0 0 3px rgba(15, 55, 235, 0.65);
			}
		}
	}
`

const ModalContext = createContext()
const ModalProvider = props => (
	<ModalContext.Provider value={props.value || {}}>{props.children}</ModalContext.Provider>
)

function Modal({ open, closeButton, onClose, handleConfirm, className, children, ...restProps }) {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(open)

	const handleClose = useCallback(() => {
		setIsOpen(false)
		typeof onClose === "function" && onClose()
	}, [onClose])

	useEffect(() => {
		setIsOpen(!!open)
	}, [open])

	return createPortal(
		<ModalProvider value={{ handleConfirm, handleClose, t }}>
			<Container className={`${className} dimmed`} hidden={!isOpen}>
				<article role="dialog" aria-modal="true" aria-labelledby="modal" {...restProps}>
					{children}
					{closeButton ? (
						<button
							type="button"
							className="closeButton"
							aria-label="Modal 닫기"
							onClick={handleClose}>
							×
						</button>
					) : null}
				</article>
			</Container>
		</ModalProvider>,
		document.body
	)
}

Modal.defaultProps = {
	open: false,
	closeButton: true,
	onClose: null,
	handleConfirm: null
}

Modal.Header = function ModalHeader(props) {
	// const context = useContext("ModalContext")
	return (
		<header className="header">
			<h3>{props.children}</h3>
		</header>
	)
}

Modal.Contents = function ModalContents(props) {
	// const context = useContext("ModalContext")
	return <div className="contents">{props.children}</div>
}

Modal.Footer = function ModalFooter(props) {
	const context = useContext(ModalContext)
	const { handleConfirm = () => {}, handleClose = () => {}, t = () => {} } = context
	return (
		<div className="footer">
			<button
				onClick={e => {
					handleConfirm()
					handleClose()
				}}>
				{t("common.confirm")}
			</button>
			{props.children}
		</div>
	)
}

export default Modal
