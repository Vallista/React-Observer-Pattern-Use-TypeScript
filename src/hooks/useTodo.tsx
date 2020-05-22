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
    TodoList.add(message)
    reRender()
  }

  const allAddTodo = (message: string) => {
    subject.notifyAddTodo(message)
    reRender()
  }

  const allRemoveTodo = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      subject.notifyRemoveTodo()
      reRender()
    }
  }

  return {
    todoListCollection,
    addTodoList,
    addTodo,
    allAddTodo,
    allRemoveTodo
  }
}

export default useTodo