import { observer } from "mobx-react";
import { useState } from "react";
import { useContext } from 'react'
import { TodoContext } from "../store";

// interface IPropsType {
//   todoStore: TodoStore;
// }

// interface StateType {
//   value: string;
// }

function AddTodo() {
  const todoStore = useContext(TodoContext)
  const [inputValue, setInputValue] = useState("");

  const inputChange = (value: string) => {
    setInputValue(value);
  };

  const handleAddTodo = () => {
    if (!inputValue) {
      alert("输入框不能为空！");
      return;
    }
    todoStore.addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="add-todo">
      <input
        className="add-todo__field"
        value={inputValue}
        onChange={(e) => inputChange(e.target.value)}
        placeholder="请输入"
      ></input>
      <button className="add-todo__button" onClick={() => handleAddTodo()}>
        AddTodo
      </button>
    </div>
  );
}
// class AddTodo extends React.Component<PropsType, StateType> {
//     constructor(props: PropsType | Readonly<PropsType>) {
//         super(props)
//         this.state = {
//             value: ''
//         }
//     }

//     inputChange(value: string) {
//         this.setState({
//             value
//         })
//     }

//     handleAddTodo() {
//         debugger
//         console.log(this.props)
//         if (!this.state.value) {
//             alert('输入框不能为空！')
//             return
//         }
//         this.props.todoStore.addTodo(this.state.value)
//         this.setState({
//             value: ''
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <input className='todo-input' value={this.state.value} onChange={(e) => this.inputChange(e.target.value)} placeholder="请输入"></input>
//                 <button className="add-btn" onClick={() => this.handleAddTodo()}>AddTodo</button>
//             </div>
//         )
//     }
// }

export default observer(AddTodo);
