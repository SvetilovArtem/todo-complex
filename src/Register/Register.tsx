import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import TextField from '../components/TextField/TextField'
import Button from '../components/Button/Button'

import styles from './register.module.css'
import { useAuth } from '../store/store'
import { UserType } from '../types/types'


const Register = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()

    const setUsers = useAuth(state => state.setUsers)
    const users = useAuth(state => state.users)
    
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const disabled = Boolean(errors.login?.message || errors.password?.message)

    const registerHandler = () => {
        const newUser: UserType = {
            login: login, password: password, email: email
        }
        if(users.some(user => user.login === login)) {
            console.log('Такой пользователь существует')
        } else {
            console.log('Авторизация прошла успешно')
        }
        setUsers(newUser)
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit(registerHandler)}>
        <h2>Регистрация</h2>
        <TextField
            id='login'
            name='login'
            type='text'
            value={login}
            setValue={setLogin}
            label='Логин'
            error={errors.login?.message}
            register={register}
            pattern={/^[A-ZА-ЯЁ]+$/i}
        />
        <TextField
            id='email'
            name='email'
            type='email'
            value={email}
            setValue={setEmail}
            label='E-mail'
            error={errors.email?.message}
            register={register}
            pattern={/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/}
        />
        <TextField
            id='password'
            name='password'
            type='password'
            value={password}
            setValue={setPassword}
            label='Пароль'
            error={errors.password?.message}
            register={register}
            pattern={/^[а-яА-ЯёЁa-zA-Z0-9]+$/}
        />
        <Button onClick={()=> {}} disabled={false} />
    </form>
  )
}

export default Register