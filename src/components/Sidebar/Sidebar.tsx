import React from 'react'

import styles from './sidebar.module.css'
import { OptionType } from '../../types/types'
import { useTodos } from '../../store/store'
import { countItemsCalculate } from '../../helpers/countItemsCalculate'

type PropsType = {
    items: OptionType[],
    selected: OptionType,
    onChange: (el: OptionType) => void,
}

const Sidebar = ({items, selected, onChange}: PropsType) => {
  const tasks = useTodos(state => state.todos)
  

  return (
    <ul className={styles.sidebar}>
        {items.map(item => {

          const count = countItemsCalculate(tasks, item)

          const optionClass = selected.title === item.title ? styles.option + ' ' + styles.selected : styles.option
          
          return (
            <li 
              className={optionClass}
              value={selected.title} 
              onClick={() => onChange(item)}
              data-is-selected={item.title === selected.title}
            >
              <span className={styles.name}>{item.title}</span> 
              <span className={styles.count}>{count}</span>
            </li>
          )
        })}
    </ul>
  )
}

export default Sidebar