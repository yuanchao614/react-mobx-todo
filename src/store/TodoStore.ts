import { makeAutoObservable } from "mobx"
import { VISIBILITY_FILTERS } from '../constants'
interface ITodoItem {
  completed: boolean
  content: string
  id?: number
}

interface IByIds {
  [key: number]: ITodoItem
}
export class TodoStore {
  allIds: number[] = []
  byIds: IByIds = {}
  newId: number = 0
  activeFilter: string = 'all'

  constructor(allIds: number[], byIds: IByIds, newId: number) {
    makeAutoObservable(this, {
    }, {
      autoBind: true
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

  reset() {
    this.allIds = []
    this.byIds = {}
    this.newId = 0
    this.activeFilter = 'all'
  }

  get todos() {
    const todos =  this.allIds.map(id => ({
      ...this.byIds[id],
      id
    }))
    switch (this.activeFilter) {
      case VISIBILITY_FILTERS.COMPLETED: {
        return todos.filter(item => item.completed)
      }

      case VISIBILITY_FILTERS.INCOMPLETE: {
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