
import { useState } from 'react';
 import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    const newText = prompt("Edit your task:");
    if (newText !== null) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      ));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <Header />
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 border rounded"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
