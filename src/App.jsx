import { useState } from 'react'
import './App.css'
import Header from './Header'
import ToDoList from './ToDoList'
import ToDoAdder from './ToDoAdder'

function App() {
  const [toDos, setToDos] = useState([])

  return (
    <>
      <Header />
      <ToDoAdder toDos={toDos} setToDos={setToDos}/>
      <ToDoList toDos={toDos} setToDos={setToDos}/>
    </>
  )
}

export default App
