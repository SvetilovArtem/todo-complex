import React, { MouseEventHandler } from 'react'
import { OptionType } from '../../types/types'

import styles from './select.module.css'

type PropsType = {
    item: OptionType,
    onClick: (value: OptionType) => void
}

const Option = ({item, onClick}: PropsType) => {

    const handleClick = (value: OptionType): MouseEventHandler<HTMLLIElement> => () => {
        onClick(value)
    }
    return (
        <li className={styles.option} value={item.title} onClick={handleClick(item)}>
            {item.title}
        </li>
    )
}

export default Option