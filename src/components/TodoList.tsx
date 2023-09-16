import React, { useState } from 'react'
import { useTodos } from '../store/store'

import Sidebar from './Sidebar/Sidebar'
import AddForm from './AddForm/AddForm'
import Tasks from './Tasks/Tasks'

import { categoies } from '../constants/constants'

import styles from './todolist.module.css'
import { OptionType } from '../types/types'



const TodoList = () => {
  const tasks = useTodos(state => state.todos)
  const [selected, onChangeFilter] = useState<OptionType>(categoies[0])

  return (
    <div className="container">
      <div className={styles.todolist}>
        <AddForm />
        <div className={styles.content}>
          <Sidebar 
            items={categoies} 
            selected={selected} 
            onChange={onChangeFilter} 
          />
          <Tasks tasks={tasks} filter={selected} />
        </div>
      </div>
    </div>


  )
}

export default TodoList