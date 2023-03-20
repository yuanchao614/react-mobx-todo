import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoStore from './store/TodoStore';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';

function App() {
  return (
    <div className="todo-app">
      <AddTodo todoStore={TodoStore} />
      <TodoList todoStore={TodoStore} />
      <VisibilityFilters todoStore={TodoStore} />
    </div>
  );
}

export default App;
