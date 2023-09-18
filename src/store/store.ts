import { create } from "zustand";
import {persist} from 'zustand/middleware'
import { CommentType, TaskType, UserType } from "../types/types";

type TodosState = {
    todos: TaskType[],
    loading: boolean,
    addTodo: (todo: TaskType) => void,
    toggleCompleted: (todo: TaskType) => void,
    onDelete: (id: string) => void,
    addComment: (id: string, comment: CommentType) => void
}

type AuthState = {
    users: UserType[],
    currentUser: UserType | null,
    setUsers: (user: UserType) => void,
    setCurrUser: (user: UserType) => void
}

export const useTodos = create<TodosState>()(
    persist(
        (set, get) => (
            {
                todos: [],
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

export const useAuth = create<AuthState>()(
    persist(set => ({
        users: [],
        currentUser: null,
        setUsers: (user: UserType) => set(state => {
            return {
                users: [...state.users, user]
            }
        }),
        setCurrUser: (user: UserType) => set(state => {
            return {
                currentUser: user
            }
        })
    }
    ),
    {name: 'auth'}
    )
)


