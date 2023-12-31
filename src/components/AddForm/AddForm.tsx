import React, { useState } from 'react'

import { useAuth, useTodos } from '../../store/store'
import moment from 'moment'
import { v1 } from 'uuid'

import { categoies } from '../../constants/constants'

import TextField from '../TextField/TextField'
import Button from '../Button/Button'
import Select from '../Select/Select'


import styles from './addForm.module.css'
import DateField from '../TextField/DateField'
import { useForm } from 'react-hook-form'

const AddForm = () => {

  const {register, handleSubmit, formState: { errors }} = useForm()

    const currUser = useAuth(state => state.currentUser)

    const addTodo = useTodos(state => state.addTodo)
    const [todoValue, setTodoValue] = useState<string>('')
    const [deadline, setDeadline] = useState('')
    const [selected, onChange] = useState(categoies[1])

    const addTodoHandler = (e:any) => {
      e.preventDefault()
      const time = moment().format('DD/MM/YYYY hh:mm')
      const newTask = {
        id: v1(), 
        title: todoValue, 
        isDone: false, 
        category: selected, 
        createdAt: time, 
        deadline: deadline,
        comments: [],
        author: currUser
      }
      addTodo(newTask)
    }

    console.log(errors)

    const disabled = Boolean(errors.task?.message || errors.deadline?.message)

  return (
    <form className={styles.form} onSubmit={handleSubmit(addTodoHandler)}>
        <TextField 
          id='task' 
          name="task"
          error={errors.task?.message} 
          type={'text'} 
          label={'Название дела'} 
          value={todoValue} 
          setValue={setTodoValue}  
          register={register}
          pattern={".*"}
        />
        <Select 
          items={categoies} 
          label='Категория'
          placeholder={selected.title} 
          selected={selected} 
          onChange={onChange} 
          onClose={() => {}} 
        />
        <DateField
          id='deadline' 
          label={'Крайний срок'} 
          name='deadline'
          required={false} 
          value={deadline} 
          setValue={setDeadline} 
          error={errors.deadline?.message} 
          register={register}
        />

        <Button onClick={addTodoHandler} disabled={disabled} />
    </form>
  )
}

export default AddForm