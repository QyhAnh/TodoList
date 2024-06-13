import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add a new task" />
            <button className="add_text" type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;