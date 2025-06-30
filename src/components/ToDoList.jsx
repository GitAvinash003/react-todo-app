// src/components/ToDoList.jsx
import ToDoItem from './ToDoItem';

export default function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="mt-6">
      {todos.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="mx-auto mb-4 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
            <span className="text-2xl text-gray-400">✓</span>
          </div>
          <h3 className="text-lg font-medium text-gray-700">No tasks yet</h3>
          <p className="mt-1 text-gray-500 max-w-md mx-auto">
            Add a new task to get started. Your tasks will appear here.
          </p>
        </div>
      ) : (
        <div>
          {/* Header visible only on medium screens and up */}
          <div className="hidden md:grid grid-cols-12 text-xs text-gray-500 font-medium px-4 py-2 bg-gray-50 rounded-lg">
            <div className="col-span-1 text-center">Status</div>
            <div className="col-span-8">Task</div>
            <div className="col-span-3 text-center">Actions</div>
          </div>
          
          <div className="space-y-3 mt-3">
            {todos.map(todo => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
