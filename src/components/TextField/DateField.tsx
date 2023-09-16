import React, { ChangeEventHandler } from 'react'
import MaskedInput from 'react-input-mask';

import styles from './textField.module.css'
import moment from 'moment';

type PropsType = {
    id: string,
    error: string,
    label: string,
    required: boolean,
    value: string,
    setValue: (str: string) => void
}

const DateField = ({
    id, 
    error, 
    label, 
    required, 
    value, 
    setValue}: PropsType) => {

    const onChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

  return (
    <div className={styles.inputWrapper}> 
        {
            label && <label htmlFor={id} className={styles.inputLabel}>{label}</label>
        }
        {
            required && <span className={styles.inputReq}>Required</span>
        }
        <MaskedInput
            mask="99/99/9999 99:99"
            value={value}
            onChange={onChangeValue}
            name={id} 
            id={id} 
            type='text' 
            className={styles.classInput}
        />
        {
            error && <span className={styles.inputError}>{ error }</span>
        }
    </div>

  )
}

export default DateField