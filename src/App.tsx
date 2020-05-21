import React, { useEffect } from 'react'
import './App.css'

import useTodo from './hooks/useTodo'
import Todos from './components/Todos'

const App = () => {
  const { todoListCollection, addTodoList, addTodo } = useTodo()

  useEffect(() => {
    addTodoList()
  }, [])

  return (
    <div id="app">
      <div className="collection">
        {todoListCollection.map((todoList, index) => (
          <Todos todos={todoList} index={index + 1} addTodo={addTodo} />
        ))}
      </div>
      <button className="button" onClick={addTodoList}>콜렉션 추가</button>
    </div>
  )
}

export default App
