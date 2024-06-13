import React from 'react';

const TodoHeader = ({ count }) => {
    return (
        <div className='todo-header'>
            <h1>Todo List</h1>
            <p>{count} tasks remaining</p>
        </div>
    )
}

export default TodoHeader;