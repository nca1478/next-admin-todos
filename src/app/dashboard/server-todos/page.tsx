import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos";
import TodosGrid from "@/todos/components/todosGrid/TodosGrid";

export const metadata = {
  title: "Listado de Todos - Server Actions",
  description: "Listado de Todos - Server Actions",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  return (
    <>
      <span className="text-3xl">Server Actions</span>
      <div className="w-full px-5 mx-5 mb-5 mt-4">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}
