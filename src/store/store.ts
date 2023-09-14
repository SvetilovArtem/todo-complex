import { create } from "zustand";
import {persist} from 'zustand/middleware'
import { CommentType, TaskType } from "../types/types";

type TodosState = {
    todos: TaskType[],
    loading: boolean,
    addTodo: (todo: TaskType) => void,
    toggleCompleted: (todo: TaskType) => void,
    onDelete: (id: string) => void,
    addComment: (id: string, comment: CommentType) => void
}

export const useTodos = create<TodosState>()(
    persist(
        (set, get) => (
            {
                todos: [
                    {
                        id: '34bee490-52c3-11ee-89b5-97afa677a513', 
                        title: 'Попасть на стажировку в Acits', 
                        isDone: false, 
                        category: {color: 'blue', title: 'Работа', value: 'Работа'}, 
                        createdAt: 'September 14th 2023, 8:54:45 am',
                        comments: [
                            {
                                text: 'Это реальная возможность получить опыт командной разработки на React.', 
                                createdDate: 'September 14th 2023, 11:37:31 am', 
                                author: 'Artem'
                            }
                        ]
                    }
                ],
                loading: false,
                addTodo: (todo) => set(state => {
                    return { todos: [...state.todos, todo] }
                }),
                toggleCompleted: (todo: TaskType) => set(state => {
                    return {todos: state.todos.map(task => 
                        task.id === todo.id ? {...task, isDone: !task.isDone} : task
                    )}
                }),
                onDelete: (id) => set(state => {
                    return {
                        todos: state.todos.filter(todo => todo.id !== id)
                    }
                }),
                addComment: (id: string, comment: CommentType) => set(state => {
                    return {
                        todos: state.todos.map(task => 
                            task.id === id ? {...task, comments: [...task.comments, comment]} : task
                        )
                    }
                })
            }
        ),
        {
            name: 'todos'
        }
    )
)


