import React from 'react'

import styles from './layout.module.css'
import Header from '../Header/Header'
import { useAuth } from '../../store/store'

type PropsType = {
    children: React.ReactNode,
    openAdminPanel: () => void,
    isOpenPanel: boolean
}

const Layout = ({ children, openAdminPanel, isOpenPanel }: PropsType) => {
  const {currentUser, setCurrUser} = useAuth()
  return (
    <div className={styles.layout}>
        <Header 
          currUser={currentUser} 
          setCurrUser={setCurrUser} 
          openAdminPanel={openAdminPanel} 
          isOpenPanel={isOpenPanel}
        />
        <div className={styles.content}>
            { children }
        </div>
    </div>
  )
}

export default Layout