import React, { FC, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'

import styles from './notification.module.css'

type PropsType = {
    isShow: boolean,
    message: string,
    isOk: boolean
}

const NotificationRoot = document.querySelector('#notification')

const Notification: FC<PropsType> = ({ message, isShow, isOk }) => {

    if(!NotificationRoot) return null

    const notificationClass = isShow ? styles.notification + ' ' + styles.active : styles.notification

    // const element = useMemo(() => {
    //     const element = document.createElement('div')
    //     element.classList.add(notificationClass)
    //     return element
    // }, [])

    // useEffect(() => {
    //     NotificationRoot?.appendChild(element)
    //     return () => {
    //         NotificationRoot?.removeChild(element)
    //     }
    // }, [])

  return ReactDOM.createPortal(
    <div className={notificationClass}>
        {
            isOk ? 
            <span className={styles.symbol + ' ' + "material-symbols-outlined"}>
                task_alt
            </span>
            :
            <span className={styles.badSymbol + ' ' + "material-symbols-outlined"}>
                warning
            </span>
        }
        
        <span>{message}</span>
    </div>, NotificationRoot
  )
}

export default Notification