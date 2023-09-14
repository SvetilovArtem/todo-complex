import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <NavLink to='/' className={styles.link}>
            <div className={styles.logoWrapper}>
                <img src="../../../accets/rocket.png" alt="" className={styles.logoImg} />
                <div className={styles.logoTitle}>
                    <span>Вселенские</span>
                    <span>задачи</span>
                </div>
            </div>
        </NavLink>
        <NavLink to={'/statistics'} className={styles.link}>
            Статистика
        </NavLink>
    </header>
  )
}

export default Header