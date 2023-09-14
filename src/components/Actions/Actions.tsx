import React, { useState } from 'react'
import moment from 'moment'

import { useTodos } from '../../store/store'

import Button from '../Button/Button'
import { CommentType, TaskType } from '../../types/types'

import styles from './actions.module.css'



type PropsType = {
    task: TaskType,
    isOpen: boolean,
    onEdit?: (t: TaskType) => void,
    onDelete: (id: string) => void,
    setHeight: (h: number) => void
}

const Actions = ({task, isOpen, onEdit, onDelete, setHeight}: PropsType) => {

    const [text, setText] = useState('')
    const addComment = useTodos(state => state.addComment)

    const addCommentHandler = (e: any) => {
        e.preventDefault()
        const newComment: CommentType = {
            text: text,
            createdDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
            author: 'Artem'
        }

        addComment(task.id, newComment)
        setText('')
    }
    
  return (
    <div id='actionsWrapper' className={styles.actionsWrapper}>
        <form className={styles.form}>
            <textarea 
                value={text} 
                onChange={e => setText(e.target.value)}
                className={styles.textarea} 
                placeholder='Комментарий'
            ></textarea>
            <Button onClick={addCommentHandler}/>
        </form>
        <ul className={styles.comments}>
            {task.comments.length ? task.comments?.map(comm => <li className={styles.comment}>{comm.createdDate} <br /> {comm.author}: {comm.text}</li>) : <div>Нет комментариев</div>}
        </ul>
        <div className={styles.actions}>
            <div className={styles.delete + ' ' + "material-symbols-outlined"} onClick={() => onDelete(task.id)}>
                delete
            </div>
            <div className={styles.edit + ' ' + "material-symbols-outlined"}>
                edit
            </div>
        </div>
    </div>
  )
}

export default Actions