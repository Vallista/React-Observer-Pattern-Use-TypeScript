import React from 'react'
import '../App.css'

import TodoList from '../models/TodoList'
import Todo from './Todo'

import { convertNumberToKorean } from '../utils'

interface IProps {
  todos: TodoList
  index: number
  addTodo(TodoList: TodoList, message: string): void
}

const Todos: React.FC<IProps> = ({ todos, index, addTodo }) => {
  return (
    <div className="todos">
      <h1 className="todos-title">{convertNumberToKorean(index)}</h1>
      <div className="todos-wrapper">
        {todos.getTodos().map((todo) => <Todo message={todo.getMessage()} />)}
      </div>
      <button className="button bottom-absolute" onClick={
        () => { addTodo(todos, `${todos.getTodos().length} 번째 테스트`) }
      }>+</button>
    </div>
  )
}

export default Todos