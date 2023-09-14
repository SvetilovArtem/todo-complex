export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
    category: OptionType,
    createdAt: string,
    comments: CommentType[]
}

export type OptionType = {title: string, color: string, value: string}
export type CommentType = {text: string, createdDate: string, author: string}

export type CategoryType = 
    {title: 'Все', color: ''} |
    {title: 'Личные', color: 'red'} |
    {title: 'Семейные', color: 'green'} |
    {title: 'Работа', color: 'blue'}|
    {title: 'Прочее', color: 'black'} 
