import { todos } from "@prisma/client";
import TodoItem from "../todoItem/TodoItem";

interface Props {
  todos?: todos[];
}

export default function TodosGrid({ todos = [] }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
