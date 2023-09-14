import React, { useState } from 'react'

import { useTodos } from '../../store/store'
import moment from 'moment'
import { v1 } from 'uuid'

import { categoies } from '../../constants/constants'

import TextField from '../TextField/TextField'
import Button from '../Button/Button'
import Select from '../Select/Select'


import styles from './addForm.module.css'

const AddForm = () => {
    const addTodo = useTodos(state => state.addTodo)
    const [todoValue, setTodoValue] = useState<string>('')
    const [selected, onChange] = useState(categoies[1])

    const addTodoHandler = (e:any) => {
      e.preventDefault()
      const time = moment().format('MMMM Do YYYY, h:mm:ss a')
      const newTask = {id: v1(), title: todoValue, isDone: false, category: selected, createdAt: time, comments: []}
      addTodo(newTask)
    }

  return (
    <form className={styles.form}>
        <TextField 
          id='task' 
          className='field' 
          error='' 
          type={'text'} 
          label={'Название дела'} 
          required={false} 
          value={todoValue} 
          setValue={setTodoValue}  
        />
        <Select 
          items={categoies} 
          label='Категория'
          placeholder={selected.title} 
          selected={selected} 
          onChange={onChange} 
          onClose={() => {}} 
        />
        <Button onClick={addTodoHandler} />
    </form>
  )
}

export default AddForm