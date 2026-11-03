
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function addTodo() {
    if (input.trim() === '') {
      return
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }

    setTodos([...todos, newTodo])
    setInput('')
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )

    setTodos(updatedTodos)
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <div className="app">
      <h1>Min att göra-lista</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Skriv en uppgift..."
          value={input}
          onChange={event => setInput(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              addTodo()
            }
          }}
        />

        <button onClick={addTodo}>Lägg till</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              className={todo.completed ? 'completed' : ''}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>
              Radera
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p>Du har inga uppgifter ännu.</p>}
    </div>
  )
}

export default App

