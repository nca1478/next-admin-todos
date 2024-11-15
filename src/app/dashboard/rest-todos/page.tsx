import prisma from "@/lib/prisma";
import TodosGrid from "@/todos/components/todosGrid/TodosGrid";

export const metadata = {
  title: "Listado de Todos",
  description: "Listado de Todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then((resp) => resp.json())
  //     .then(console.log);
  // }, []);

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
