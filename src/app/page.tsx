import Link from "next/link";
import prisma from "@/database";
import Todo from "./components/Todo";
import { RedirectType, redirect } from "next/navigation";

const Home = async () => {
  const todos = await prisma.todo.findMany();
  const check = async (id: string, checked: boolean) => {
    "use server";
    await prisma.todo.update({
      data: { checked: checked },
      where: { id },
    });
  };

  const remove = async (id: string) => {
    "use server";
    await prisma.todo.delete({ where: { id } });
    redirect("/");
  };

  return (
    <div className="home">
      <header className="flex justify-between items-center mb-14">
        <h1 className="text-3xl">Todo</h1>
        <Link
          className="border border-slate-400 rounded px-3 py-1 hover:bg-slate-600"
          href={"/new"}
        >
          New
        </Link>
      </header>
      {todos &&
        todos.map((todo) => (
          <Todo {...todo} check={check} remove={remove} key={todo.id} />
        ))}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Home;
