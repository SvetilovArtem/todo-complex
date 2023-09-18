import React, { ChangeEventHandler } from 'react'

import styles from './textField.module.css'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type InputType = 'text' | 'password' | 'email'

type PropsType = {
    id: string,
    type: InputType,
    name: string,
    error: any,
    label: string,
    value: string,
    setValue: (str: string) => void,
    pattern: any,
    register: UseFormRegister<FieldValues> 
}

const TextField = ({
    id, 
    type, 
    name,
    error, 
    label, 
    value, 
    setValue,
    pattern,
    register}: PropsType) => {

    const onChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

  return (
    <div className={styles.inputWrapper}> 
        {
            label && <label htmlFor={id} className={styles.inputLabel}>{label}</label>
        }
        <input 
            {...register(name, {
                required: {
                    value: true,
                    message: 'Это поле обязательно*'
                },
                pattern: {
                    value: pattern,
                    message: 'Проверьте введенные данные*'
                }
            })}
            name={id}
            id={id}
            type={type}
            value={value}
            onChange={onChangeValue}
            className={styles.classInput}

        />
        {
            error && <span className={styles.inputError}>{ error }</span>
        }
    </div>

  )
}

export default TextField