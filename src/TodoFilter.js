import React from 'react';

const TodoFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <button className={`filter_button ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter_button ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
            <button className={`filter_button ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
        </div>
    )
}

export default TodoFilter;