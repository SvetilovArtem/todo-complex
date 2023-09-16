import React from 'react'
import { TransitionGroup } from 'react-transition-group'

import { useTodos } from '../../store/store'
import Task from './Task'

import styles from './tasks.module.css'
import { OptionType, TaskType } from '../../types/types'
import { countItemsCalculate } from '../../helpers/countItemsCalculate'

type PropsType = {
  filter: OptionType,
  tasks: TaskType[]
}

const Tasks = ({ tasks, filter }: PropsType) => {

  const toggleCompleted = useTodos(state => state.toggleCompleted)
  const onDelete = useTodos(state => state.onDelete)

  const count = countItemsCalculate(tasks, filter)
  
  return (
    <TransitionGroup className={styles.tasks}>
      <ul className={styles.tasks}>
          {
            filter.title !== 'Все'
            ?
            tasks.filter(task => task.category.title === filter.title).map(task => 
              <Task key={task.id} task={task} onChangeCompleted={toggleCompleted} onDelete={onDelete} />
            )
            :
            tasks.map(task => 
              <Task key={task.id} task={task} onChangeCompleted={toggleCompleted} onDelete={onDelete} />
            )
          }
          {!count && <span>Нет записей</span>}
      </ul>
    </TransitionGroup>
  )
}

export default Tasks