import React from 'react'
import cx from 'classnames'
import Todo from './Todo'
import { TodoStore } from '../store/TodoStore'
import { observer } from 'mobx-react-lite'

interface PropsType {
    todoStore: TodoStore
}


const TodoList = ({ todoStore }: PropsType) => {
    return (
        <ul className="todo-list">
            {
                todoStore.todos && todoStore.todos.length ? todoStore.todos.map(
                    (todo, index) => <Todo todo={todo} index={index + 1} key={index} todoStore={todoStore} />
                ) : 'no todos data!'
            }
        </ul>
    )
}


export default observer(TodoList)