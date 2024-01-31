import { useState } from "react"

export default function ToDoAdder(props) {
    const [newToDo, setNewToDo] = useState("")
    const { toDos, setToDos } = props
    console.log(toDos)

    function handleSubmit() {
        event.preventDefault()
        setToDos((currentToDos) => {
            return [...currentToDos, newToDo]
        })
        setNewToDo("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newToDo} onChange={(event) => {
                console.log(event.target.value)
                setNewToDo(event.target.value)
            }}></input>
            <button>Add to-do</button>
        </form>
    )
}