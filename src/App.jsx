

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

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

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-xl mx-auto px-4">
        <Header />
        
        {/* Add Task Section */}
        <div className="mt-6 bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <h2 className="text-lg font-medium text-gray-800 mb-3">Add New Task</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What needs to be done?"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <button 
              onClick={addTodo} 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FaPlus className="mr-2" />
              Add
            </button>
          </div>
        </div>

        {/* Todo List Section */}
        <div className="mt-6">
          <ToDoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>

        {/* Stats Footer */}
        {todos.length > 0 && (
          <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
            <span>
              {todos.filter(todo => todo.completed).length} of {todos.length} completed
            </span>
            <button 
              onClick={() => setTodos([])}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              Clear all tasks
            </button>
          </div>
        )}
      </div>
    </div>
  );
}