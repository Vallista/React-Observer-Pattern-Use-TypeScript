import Todo from "./Todo"
import { RemoveState, IRemovable } from './Removable';

class TodoList implements IRemovable {
  private readonly todos: Todo[]
  private removeState: RemoveState

  constructor() {
    this.todos = [new Todo('테스트')]
    this.removeState = RemoveState.IDLE

    this.addTodo = this.addTodo.bind(this)
    this.remove = this.remove.bind(this)
  }

  getTodos() {
    return this.todos.filter((todo) => todo.getRemoveState() !== RemoveState.REMOVE)
  }

  addTodo(message: string) {
    this.todos.push(new Todo(message))
  }

  remove() {
    if (this.removeState !== RemoveState.REMOVE)
      this.removeState = RemoveState.REMOVE
  }

  getRemoveState() {
    return this.removeState
  }
}

export default TodoList