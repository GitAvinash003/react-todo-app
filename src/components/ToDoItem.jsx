// src/components/ToDoItem.jsx
export default function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
        {todo.text}
      </div>
      <div className="flex gap-2">
        <button onClick={() => toggleComplete(todo.id)} className="text-green-500">✓</button>
        <button onClick={() => editTodo(todo.id)} className="text-blue-500">✎</button>
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500">✕</button>
      </div>
    </div>
  );
}