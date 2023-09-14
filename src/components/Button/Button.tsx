import React from 'react'

import styles from './button.module.css'

type PropsType = {
  onClick: (e: any) => void
}

const Button = ({onClick}: PropsType) => {
    const onMousemoveHandler = (e:any) => {

        const x = e.pageX - e.target.offsetLeft
        const y = e.pageY - e.target.offsetTop
      
        e.target.style.setProperty('--x', `${ x }px`)
        e.target.style.setProperty('--y', `${ y }px`)
        
    }

  return (
    <button className={styles.button} onMouseMove={onMousemoveHandler} onClick={onClick}>
        <span>Добавить</span>
    </button>
  )
}

export default Button