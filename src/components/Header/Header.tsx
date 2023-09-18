import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './header.module.css'
import { UserType } from '../../types/types'

type PropsType = {
    currUser: UserType | null,
    setCurrUser: (currUser: any) => void
}

const Header = ({currUser, setCurrUser}: PropsType) => {
  return (
    <header className={styles.header}>
        <NavLink to='/todolist' className={styles.link}>
            <div className={styles.logoWrapper}>
                <img src="../../../accets/rocket.png" alt="" className={styles.logoImg} />
                <div className={styles.logoTitle}>
                    <span>Вселенские</span>
                    <span>задачи</span>
                </div>
            </div>
        </NavLink>
        <div className={styles.links}>
            {currUser && <span className={styles.currUser}>{currUser.login} </span>}
            {
                currUser ? 
                <NavLink to={'/'} className={styles.link} onClick={() => setCurrUser(null)}>
                    Выйти
                </NavLink>
                :
                <NavLink to={'/'} className={styles.link}>
                    Войти
                </NavLink>
            }
            <NavLink to={'/statistics'} className={styles.link}>
                Статистика
            </NavLink>
        </div>
    </header>
  )
}

export default Header