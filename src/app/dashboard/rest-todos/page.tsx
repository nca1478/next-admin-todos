// las rutas se renderizen para cada usuario en el momento de la solicitud (*).
export const dynamic = "force-dynamic";

// Tiempo de revalidación predeterminado para un diseño o página (*)
export const revalidate = 0;

import { getUserSessionServer } from "@/auth/actions/auth-actions";
// *: solo para Page, Layout, or Route Handler

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { NewTodo } from "@/todos";
import TodosGrid from "@/todos/components/todosGrid/TodosGrid";

export const metadata = {
  title: "Listado de Todos",
  description: "Listado de Todos",
};

export default async function RestTodosPage() {
  const user = await getUserSessionServer();

  if (!user) redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    where: { userId: user?.id },
    orderBy: { description: "asc" },
  });

  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then((resp) => resp.json())
  //     .then(console.log);
  // }, []);

  return (
    <div>
      <span className="text-3xl">Rest Todos</span>
      <hr className="mb-5" />

      <div className="w-full px-5 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
