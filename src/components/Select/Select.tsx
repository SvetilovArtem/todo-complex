import React, { useState } from 'react'

import styles from './select.module.css'
import { OptionType } from '../../types/types'
import Option from './Option'
import { categoies } from '../../constants/constants'

type PropsType = {
    items: OptionType[],
    label: string,
    placeholder: string,
    selected: OptionType,
    onChange: (selected: OptionType) => void,
    onClose: () => void
}

const Select = ({ items, placeholder, selected, label, onChange, onClose }: PropsType) => {
    const [isOpen, setIsOpen] = useState(false)

    const onClickPlaceholder = () => {
        setIsOpen(prev => !prev)
    }

    const onChangeHandler = (value: OptionType) => {
        setIsOpen(false)
        onChange(value)
    }
  return (
        <div className={styles.selectWrapper}>
            <label className={styles.label}>{label}</label>
            <div className={styles.select}>
                <div className={styles.placeholder} onClick={onClickPlaceholder}>{ placeholder }</div>
                <ul className={styles.options} data-is-active={isOpen}>
                    {items
                        .filter(item => 
                            item.title !== selected.title && item.title !== categoies[0]['title']
                        )
                        .map(item => <Option item={item} onClick={onChangeHandler} />)}
                </ul>
            </div>
        </div>

  )
}

export default Select