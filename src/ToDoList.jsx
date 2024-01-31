import { useState } from "react"

export default function ToDoList(props) {
    const { toDos, setToDos } = props

    return (
        <ul>
            {toDos.map((todo) => {
                return <li key={todo}>{todo}</li>
            })}
        </ul>
    )
}