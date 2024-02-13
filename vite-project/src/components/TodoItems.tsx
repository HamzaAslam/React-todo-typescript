import { Todo } from "../types/todos";
interface TodoItemsProps {
  todo: Todo;
}

export default function TodoItems({ todo }: TodoItemsProps) {
  return (
    <div key={todo.id}>
      <label className="flex items-center align-middle gap-3 border-2 border-gray-400 p-2 rounded-md">
        <input type="checkbox" className="scale-125" />
        <span
          className={
            todo.completed
              ? "line-through text-gray-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          {todo.title}
        </span>
      </label>
    </div>
  );
}
