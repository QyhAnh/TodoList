import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoFilter from './TodoFilter';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9), text, isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos)
  };

  const toggleTodo = (id) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updateTodos);
  };

  const filterTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return false;
  });
  return (
    <div className="app">
      <TodoHeader count={todos.filter((todo) => !todos.isCompleted).length} />
      <TodoForm addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filterTodos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  )
}
export default App;
