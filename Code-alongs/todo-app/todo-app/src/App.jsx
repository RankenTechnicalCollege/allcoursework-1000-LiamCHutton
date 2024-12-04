import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {

  const handleFormSubmit = (todo) => {
    console.log(todo);
  }

  return (
    <div className="todo-app">
      <TodoList onSubmit={handleFormSubmit}/>
    </div>
  )
}

export default App
