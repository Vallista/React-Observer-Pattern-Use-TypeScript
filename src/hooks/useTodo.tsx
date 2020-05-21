import { useState } from 'react'
import TodoList from '../models/TodoList'

import { Subject } from '../models/Observer'

const subject = new Subject()

function useTodo() {
  const [todoListCollection, setTodoListCollection] = useState<TodoList[]>([])

  const reRender = (other: TodoList[] = []) => {
    setTodoListCollection(
      [...todoListCollection, ...other]
    )
  }

  const addTodoList = () => {
    const todoList = new TodoList()

    reRender([todoList])
    subject.registration(todoList)
    console.log(subject)
  }

  const addTodo = (TodoList: TodoList, message: string) => {
    TodoList.addTodo(message)
    reRender()
  }

  const allAddTodo = (message: string) => {
    subject.notify(message)
    console.log(subject)
    reRender()
  }

  return {
    todoListCollection,
    addTodoList,
    addTodo,
    allAddTodo
  }
}

export default useTodo