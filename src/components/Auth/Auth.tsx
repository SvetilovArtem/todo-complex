import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

import { useAuth } from '../../store/store'

import TextField from '../TextField/TextField'
import Button from '../Button/Button'
import Notification from '../Notification/Notification'

import styles from './auth.module.css'
// const initialState = {
//     login: '',
//     password: ''
// }

const Auth = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()

    const navigate = useNavigate()

    const users = useAuth(state => state.users)
    const setCurrUser = useAuth(state => state.setCurrUser)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [showNotification, setShowNotification] = useState({ isShow: false, message: '', status: false })

    const disabled = Boolean(errors.login?.message || errors.password?.message)

    // const [state, setState] = useState(initialState)

    // const {login, password} = state

    // const onChange = (name: any, value: string) => {
    //     setState({ ...state, [name]: value })
    // }

    const authHandler = () => {
        if(users.some(user => user.login === login && user.password === password)) {
            console.log('Авторизация прошла успешно')
            const currUser = users.find(user => user.login === login)
            if(currUser) {
                setCurrUser(currUser)
                navigate('/todolist')
                setShowNotification({ isShow: true, message: 'Авторизация прошла успешно.', status: true })
            }
            
        } else {
            console.log('Проверьте логин и пароль')
            setShowNotification({ isShow: true, message: 'Проверьте логин и пароль.', status: false })
            
        }
        
    }
    console.log(showNotification)
    // console.log(errors)
  return (
    <form className={styles.form} onSubmit={handleSubmit(authHandler)}>
        <h2>Авторизация</h2>
        <TextField
            id='login'
            name='login'
            type='text'
            value={login}
            setValue={setLogin}
            label='Логин'
            error={errors.login?.message}
            register={register}
            pattern={/^[a-яё]+(?:[ -][a-яё]+)*$/i}
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
        <NavLink to={'/register'} className={styles.link}>
            Нет аккаунта?<br/> Зарегистрируйтесь!
        </NavLink>
        <Notification 
            message={showNotification.message} 
            isShow={showNotification.isShow} 
            isOk={showNotification.status}
        />
    </form>
  )
}

export default Auth