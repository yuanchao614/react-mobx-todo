import React from 'react'
import cx from 'classnames'
import { TodoStore } from '../store/TodoStore'
import { observer } from 'mobx-react-lite'

interface TodoItem {
    id?: number
    content: string
    completed: boolean
}

interface PropsType {
    todo: TodoItem,
    index: number
    todoStore: TodoStore
}

function Todo({ todo, index, todoStore }: PropsType) {
    return (
        <li onClick={() => todoStore.toggleTodo(todo.id || 0)} className={cx('todo-item', {
            'todoed': todo.completed
        })} title={todo.completed ? '标记为未完成' : '标记为已完成'}>
            <input className='check-box' checked={todo.completed} type="checkbox" onChange={(e) => {
                // e.preventDefault()
            }}></input>
            {
                `${index}：${todo.completed ? "👌" : "👋"}${todo.content}`
            }
        </li>
    )
}


export default observer(Todo)