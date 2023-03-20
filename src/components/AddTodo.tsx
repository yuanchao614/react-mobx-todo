import React from 'react'
import cx from 'classnames'
import { TodoStore } from '../store/TodoStore'
import { observer } from 'mobx-react'

interface PropsType {
    todoStore: TodoStore
}

interface StateType {
    value: string
}
class AddTodo extends React.Component<PropsType, StateType> {
    constructor(props: PropsType | Readonly<PropsType>) {
        super(props)
        this.state = {
            value: ''
        }
    }

    inputChange(value: string) {
        this.setState({
            value
        })
    }

    handleAddTodo() {
        debugger
        console.log(this.props)
        if (!this.state.value) {
            alert('输入框不能为空！')
            return
        }
        this.props.todoStore.addTodo(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div>
                <input className='todo-input' value={this.state.value} onChange={(e) => this.inputChange(e.target.value)} placeholder="请输入"></input>
                <button className="add-btn" onClick={() => this.handleAddTodo()}>AddTodo</button>
            </div>
        )
    }
}

export default observer(AddTodo)