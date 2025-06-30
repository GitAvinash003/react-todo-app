import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

export default function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100">
      <button 
        onClick={() => toggleComplete(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 transition-colors duration-200 ${
          todo.completed 
            ? 'bg-green-500 border-green-500' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        {todo.completed && <FaCheck className="w-3 h-3 text-white" />}
      </button>

      <div className={`flex-grow truncate ${
        todo.completed 
          ? 'text-gray-400 line-through' 
          : 'text-gray-700'
      }`}>
        {todo.text}
      </div>

      <div className="flex space-x-2 ml-3">
        <button
          onClick={() => editTodo(todo.id)}
          className="p-2 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          aria-label="Edit todo"
        >
          <FaEdit className="w-5 h-5" />
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 text-gray-500 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
          aria-label="Delete todo"
        >
          <FaTrash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}