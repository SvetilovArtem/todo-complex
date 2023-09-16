import { OptionType, TaskType } from "../types/types"

export const countItemsCalculate = (tasks: TaskType[], category: OptionType) => {
    const count = category.title !== 'Все' 
    ? tasks.filter(task => task.category.title === category.title).length
    : tasks.length

    return count
}