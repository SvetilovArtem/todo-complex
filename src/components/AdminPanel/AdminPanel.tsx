import React, { ChangeEvent, FC, useState } from 'react'
import ReactDOM from 'react-dom'

import { UserType } from '../../types/types'

import styles from './adminPanel.module.css'

type PropsType = {
    currentUser: UserType | null,
    isOpen: boolean
}

const adminRoot = document.querySelector('#adminPanel')

const initialState = {
    editModeLogin: false,
    editModePassword: false,
    editModeEmail: false
}

const AdminPanel: FC<PropsType> = ({ currentUser, isOpen }) => {
    const [state, setState] = useState(initialState)

    const {editModeEmail, editModeLogin, editModePassword} = state

    const onChange = (name: any, value: string | boolean) => {
        setState({ ...state, [name]: value })
    }

    const editModeLoginActivate = () => onChange("editModeLogin", !editModeLogin)
    const editModePasswordActivate = () => onChange("editModePassword", !editModePassword)
    const editModeEmailActivate = () => onChange("editModeEmail", !editModeEmail)

    if(!adminRoot || !currentUser) return null

    const { login, email, password } = currentUser
    const adminPanelWrapperClass = isOpen ? styles.adminPanelWrapper + ' ' + styles.active : styles.adminPanelWrapper
    const adminPanelClass = isOpen ? styles.adminPanel + ' ' + styles.active : styles.adminPanel

  return ReactDOM.createPortal(
        <div className={adminPanelWrapperClass}>
            
            <div className={adminPanelClass}>
                <h2 className={styles.panelName}>Настройки</h2>
                <div className={styles.btn_close}>
                    <div className={styles.symbol}></div>
                </div>
                <div onDoubleClick={editModeLoginActivate}>
                    <span>Login: </span>
                    {editModeLogin ? <input value={login} /> : <span>{login}</span>}
                </div>
                <div onDoubleClick={editModeEmailActivate}>
                    <span>Email: </span>
                    {editModeEmail ? <input value={email} /> : <span>{email}</span>}
                </div>
                <div onDoubleClick={editModePasswordActivate}>
                    <span>Password: </span>
                    {editModePassword ? <input value={password} /> : <span>{password}</span>}
                </div>
                <div></div>
            </div>
        </div>,
        adminRoot
  )
}

export default AdminPanel