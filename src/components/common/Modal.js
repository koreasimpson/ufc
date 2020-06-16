import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom"
import { useTranslation } from "react-i18next"

import StyledWrapper from "./ModalStyled"

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
			<StyledWrapper className={`${className} dimmed`} hidden={!isOpen}>
				<article
					ref={modalRef}
					tabIndex="-1"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal"
					{...restProps}>
					{children}
				</article>
			</StyledWrapper>
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
