import { Todo } from "@prisma/client";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  return <div>{todo.description}</div>;
}
