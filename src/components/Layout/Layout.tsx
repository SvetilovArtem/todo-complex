import React from 'react'

import styles from './layout.module.css'
import Header from '../Header/Header'
import { useAuth } from '../../store/store'

type PropsType = {
    children: React.ReactNode
}

const Layout = ({ children }: PropsType) => {
  const {currentUser, setCurrUser} = useAuth()
  return (
    <div className={styles.layout}>
        <Header currUser={currentUser} setCurrUser={setCurrUser} />
        <div className={styles.content}>
            { children }
        </div>
    </div>
  )
}

export default Layout