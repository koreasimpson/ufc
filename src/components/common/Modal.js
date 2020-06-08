import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react"
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
		min-width: 280px;
		min-height: 100px;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.modalHeader {
			padding: 1rem 1.4rem;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			color: #000;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.modalContents {
			padding: 1rem 1.4rem;
			flex: 1;
		}

		.modalFooter {
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

		.headerCloseButton {
			cursor: pointer;
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

function Modal({
	open,
	headerCloseButton,
	onClose,
	handleConfirm,
	className,
	children,
	...restProps
}) {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(open)
	const modalRef = useRef(null)

	const handleClose = useCallback(
		e => {
			setIsOpen(false)
			typeof onClose === "function" && onClose()
		},
		[onClose]
	)

	const handleKeyTrap = useCallback(e => {
		if (!modalRef.current) return

		const focusableElements = modalRef.current.querySelectorAll(
			"[href], [tabindex], button, input, textarea, select"
		)
		const shiftKey = e.shiftKey
		const eventTarget = e.target
		const firstFocusableNode = focusableElements[0]
		const lastFocusableNode = focusableElements[focusableElements.length - 1]

		const isFirstFocusableNode = Object.is(eventTarget, firstFocusableNode)
		const isLastFocusableNode = Object.is(eventTarget, lastFocusableNode)

		if (shiftKey && isFirstFocusableNode) {
			e.preventDefault()
			lastFocusableNode.focus()
		}
		if (!shiftKey && isLastFocusableNode) {
			e.preventDefault()
			firstFocusableNode.focus()
		}
	}, [])

	useEffect(() => {
		setIsOpen(!!open)
		modalRef.current.focus()

		const keyListenersMap = new Map([
			[27, handleClose],
			[9, handleKeyTrap]
		])

		function handleKeyListener(e) {
			const listener = keyListenersMap.get(e.keyCode)
			typeof listener === "function" && listener(e)
		}

		window.addEventListener("keydown", handleKeyListener)

		return () => {
			window.removeEventListener("keydown", handleKeyListener)
		}
	}, [open, handleClose, handleKeyTrap])

	return createPortal(
		<ModalProvider value={{ headerCloseButton, handleConfirm, handleClose, t }}>
			<Container className={`${className} dimmed`} hidden={!isOpen}>
				<article
					ref={modalRef}
					tabIndex="-1"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal"
					{...restProps}>
					{children}
				</article>
			</Container>
		</ModalProvider>,
		document.body
	)
}

Modal.defaultProps = {
	open: false,
	headerCloseButton: true,
	onClose: null,
	handleConfirm: null
}

Modal.Header = function ModalHeader(props) {
	const context = useContext(ModalContext)
	const { headerCloseButton, handleClose = () => {}, t = () => {} } = context
	return (
		<header className="modalHeader">
			<h3>{props.children}</h3>
			{headerCloseButton ? (
				<button
					type="button"
					className="headerCloseButton"
					aria-label="Modal 닫기"
					onClick={handleClose}>
					×
				</button>
			) : null}
		</header>
	)
}

Modal.Contents = function ModalContents(props) {
	return <div className="modalContents">{props.children}</div>
}

Modal.Footer = function ModalFooter(props) {
	const context = useContext(ModalContext)
	const { handleConfirm = () => {}, handleClose = () => {}, t = () => {} } = context
	return (
		<div className="modalFooter">
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
