import prisma from "@/database";
import { redirect } from "next/navigation";
import Link from "next/link";

const New = () => {
  const addTodo = async (data: FormData) => {
    "use server";
    const title = data.get("title")?.toString();
    if (title != "" && typeof title == "string") {
      await prisma.todo.create({ data: { title: title, checked: false } });
      redirect("/");
    }
    return;
  };
  return (
    <div className="new">
      <header className="mb-14">
        <h1 className="text-3xl">New</h1>
      </header>
      <form action={addTodo}>
        <input
          type="text"
          name="title"
          className="bg-transparent border border-slate-400 rounded px-2 py-1 w-full mb-5"
        />
        <div className="btns flex gap-2 justify-end">
          <Link
            className="border border-slate-400 rounded px-3 py-1 hover:bg-slate-600"
            href={"/"}
          >
            Cancel
          </Link>
          <button className="border border-slate-400 rounded px-3 py-1 hover:bg-slate-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default New;
