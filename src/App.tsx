import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoStore from './store/TodoStore';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import { observer } from 'mobx-react-lite'

function App() {
  return (
    <div className="todo-app">
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default observer(App);
