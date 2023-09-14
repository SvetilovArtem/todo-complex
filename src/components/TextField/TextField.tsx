import React, { ChangeEventHandler } from 'react'

import styles from './textField.module.css'

type InputType = 'text' | 'checkbox' | 'password'

type PropsType = {
    id: string,
    type: InputType,
    className: string,
    error: string,
    label: string,
    required: boolean,
    value: string,
    setValue: (str: string) => void
}

const TextField = ({
    id, 
    type, 
    className, 
    error, 
    label, 
    required, 
    value, 
    setValue}: PropsType) => {

    const onChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    let classInput = className

  return (
    <div className={styles.inputWrapper}> 
        {
            label && <label htmlFor={id} className={styles.inputLabel}>{label}</label>
        }
        {
            required && <span className={styles.inputReq}>Required</span>
        }
        <input 
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