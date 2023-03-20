import { makeObservable, observable, computed, action, flow } from "mobx"

interface TodoItem {
  completed: boolean
  content: string
  id?: number
}

interface ByIds {
  [key: number]: TodoItem
}
export class TodoStore {
  allIds: number[] = []
  // todos: TodoItem[] = []
  byIds: ByIds = {}
  newId: number = 0
  activeFilter: string = 'all'

  constructor(allIds: number[], byIds: ByIds, newId: number) {
    makeObservable(this, {
      allIds: observable,
      byIds: observable,
      activeFilter: observable,
      todos: computed
    })
    this.allIds = allIds
    this.byIds = byIds
    this.newId = newId
  }

  addTodo(inputValue: string) {
    this.allIds = [
      ...this.allIds,
      this.newId
    ]
    debugger
    this.byIds[this.newId] = {
      completed: false,
      content: inputValue
    }
    this.newId += 1
  }

  toggleTodo(id: number) {
    this.byIds[id].completed = !this.byIds[id].completed
  }

  setFilter(filter: string) {
    this.activeFilter = filter
  }

  get todos() {
    const todos =  this.allIds.map(id => ({
      ...this.byIds[id],
      id
    }))
    switch (this.activeFilter) {
      case 'completed': {
        return todos.filter(item => item.completed)
      }

      case 'incomplete': {
        return todos.filter(item => !item.completed)
      }
      default: {
        return todos
      }
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoStore([], {}, 0)