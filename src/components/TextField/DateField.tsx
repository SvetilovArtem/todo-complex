import React, { ChangeEventHandler } from 'react'
import MaskedInput from 'react-input-mask';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './textField.module.css'
import moment from 'moment';

type PropsType = {
    id: string,
    error: any,
    label: string,
    required: boolean,
    value: string,
    setValue: (str: string) => void,
    register: UseFormRegister<FieldValues>
}

const DateField = ({
    id, 
    error, 
    label, 
    required, 
    value, 
    setValue,
    register}: PropsType) => {

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
            {...register("date", {
                required: {
                    value: true,
                    message: 'Это поле обязательно*'
                },
                validate: {
                    value: (value) => {
                        if(
                            moment(value, 'DD/MM/YYYY hh:mm').fromNow().includes('Invalid date')
                        ) {
                            return false
                        } else {
                            return true
                        }
                    },
                }
            })}
            mask="99/99/9999 99:99"
            value={value}
            onChange={onChangeValue}
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