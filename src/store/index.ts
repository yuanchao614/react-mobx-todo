import { createContext } from 'react'
import { TodoStore } from './TodoStore';
import todoStore from './TodoStore';

export const TodoContext = createContext<TodoStore>(todoStore)
