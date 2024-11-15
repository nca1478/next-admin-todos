import { todos } from "@prisma/client";

interface Props {
  todo: todos;
}

export default function TodoItem({ todo }: Props) {
  return <div>{todo.description}</div>;
}
