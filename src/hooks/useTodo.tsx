import { useState } from 'react'
import TodoList from '../models/TodoList'

function useTodo() {
  const [todoListCollection, setTodoListCollection] = useState<TodoList[]>([])

  const addTodoList = () => {
    setTodoListCollection(
      [
        ...todoListCollection,
        new TodoList()
      ]
    )
  }

  const addTodo = (TodoList: TodoList, message: string) => {
    TodoList.addTodo(message)
    setTodoListCollection(
      [...todoListCollection]
    )
  }

  return {
    todoListCollection,
    addTodoList,
    addTodo
  }
}

export default useTodo