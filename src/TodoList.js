import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDelete, onToggle }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <div key={todo.id} className="todo-item">
                    <Todo todo={todo} onDelete={onDelete} onToggle={onToggle} />
                </div>
            ))}
        </div>
    );
};

export default TodoList;