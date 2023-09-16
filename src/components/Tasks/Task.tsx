import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { TaskType } from '../../types/types'
import Actions from '../Actions/Actions'

import styles from './task.module.css'
import Modal from '../Modal/Modal'

interface IProps {
  task: TaskType,
  onChangeCompleted: (t: TaskType) => void,
  onDelete: (id: string) => void
}

const Task = ({ task, onChangeCompleted, onDelete}: IProps) => {

  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [heightActions, setHeight] = useState(0)

  const {title, category, isDone} = task

  const toggleActionsHandler = () => {
    setIsOpen(!isOpen)
    console.log('click')
  }

  const deleteModeHandler = () => setDeleteModalOpen(!deleteModalOpen)

  const onDeleteItem = () => { 
    onDelete(task.id) 
  }

  return (
    <CSSTransition 
      classNames={{
        enterActive: styles.enterActive,
        exitActive: styles.exitActive,
        exit: styles.exit
      }}
      timeout={500}
      in={true}
      >
      <li className={styles.task} style={{borderBottom: `7px solid ${category.color}`}}>
        <div className={styles.preview}>
          <div className={styles.titleWrapper}>
            <input type='checkbox' checked={isDone} onChange={() => onChangeCompleted(task)} />
            <span className={styles.title}>{title}</span>
          </div>
          <div 
            className={styles.arrowsDown + ' ' + "material-symbols-outlined"} 
            onClick={toggleActionsHandler}
          >
            keyboard_double_arrow_down
          </div>
        </div>
        { isOpen && <Actions 
          task={task}
          onDelete={deleteModeHandler} 
          isOpen={isOpen}
          setHeight={setHeight} 
        />}
        <Modal isOpen={deleteModalOpen} setIsOpen={setDeleteModalOpen}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Удалить запись?</h3>
            <div className={styles.btns}>
              <button onClick={onDeleteItem} className={styles.deleteBtn}>Удалить</button>
              <button className={styles.cancelBtn} onClick={deleteModeHandler}>Отмена</button>
            </div>
          </div>
        </Modal>
      </li>
    </CSSTransition>


  )
}

export default Task