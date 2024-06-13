import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ todo, onDelete, onToggle }) => {
    return (
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => onToggle(todo.id)} />
            <span>{todo.text}</span>
            <button className="icon" onClick={() => onDelete(todo.id)}>X</button>
        </div>
    )
}

export default Todo;