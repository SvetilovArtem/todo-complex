import React from 'react'

import styles from './layout.module.css'
import Header from '../Header/Header'

type PropsType = {
    children: React.ReactNode
}

const Layout = ({ children }: PropsType) => {
  return (
    <div className={styles.layout}>
        <Header />
        <div className={styles.content}>
            { children }
        </div>
    </div>
  )
}

export default Layout