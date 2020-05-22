import Todo from "./Todo"
import { RemoveState, IRemovable } from './Removable'
import { IObserver } from './Observer'

class TodoList implements IRemovable, IObserver {
  private readonly todos: Todo[]
  private removeState: RemoveState

  constructor() {
    this.todos = [new Todo('테스트')]
    this.removeState = RemoveState.IDLE

    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.notifyAddTodo = this.notifyAddTodo.bind(this)
    this.notifyRemoveTodo = this.notifyRemoveTodo.bind(this)
  }

  getTodos() {
    return this.todos.filter((todo) => todo.getRemoveState() !== RemoveState.REMOVE)
  }

  add(message: string) {
    this.todos.push(new Todo(message))
  }

  remove() {
    if (this.removeState !== RemoveState.REMOVE)
      this.removeState = RemoveState.REMOVE
  }

  getRemoveState() {
    return this.removeState
  }

  notifyAddTodo(message: string) {
    this.add(message)
  }

  notifyRemoveTodo() {
    this.todos.forEach((todo) => {
      todo.remove()
    })
  }
}

export default TodoList