//src/components/ToDoList.jsx
import ToDoItem from './ToDoItem';

export default function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="mt-4 space-y-2">
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
  );
}
