import prisma from "@/lib/prisma";

export const metadata = {
  title: "Listado de Todos",
  description: "Listado de Todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todos.findMany({
    orderBy: { description: "asc" },
  });

  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then((resp) => resp.json())
  //     .then(console.log);
  // }, []);

  return (
    <div>
      <h1 className="text-2xl">Rest Todos Page</h1>
      {JSON.stringify(todos)}
    </div>
  );
}
