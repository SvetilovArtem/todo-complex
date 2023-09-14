import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'

import styles from './modal.module.css'


const modalRoot = document.querySelector('#modal')

interface IModalProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    children: JSX.Element
}

const Modal = (props: IModalProps) => {
    const {isOpen, setIsOpen, children} = props

    const element = useMemo(() => {
        const element = document.createElement('div')
        return element
    }, [])

    useEffect(() => {
        modalRoot?.appendChild(element)
        return () => {
            modalRoot?.removeChild(element)
        }
    }, [])
    
    const modalBoxClass = isOpen ? styles.modal_box + ' ' + styles.active : styles.modal_box
    const modalClass = isOpen ? styles.modal + ' ' + styles.active : styles.modal


    return ReactDOM.createPortal(
        <div className={modalBoxClass}>
            <div className={modalClass}>
                <div className={styles.btn_close} onClick={() => setIsOpen(false)}>
                    <div className={styles.symbol}></div>
                </div>
                { children }
            </div>
        </div>
        , element)
}

export default Modal