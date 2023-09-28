"use client";

type todoProps = {
  id: string;
  title: string;
  checked: boolean;
  check: (id: string, checked: boolean) => void;
  remove: (id: string) => void;
};

const Todo = ({ id, title, checked, check, remove }: todoProps) => {
  return (
    <div className="todo flex justify-between items-center">
      <div className="flex gap-3  ml-3 my-4">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={checked}
          onChange={(e) => check(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="peer-checked:line-through peer-checked:text-slate-400"
        >
          {title}
        </label>
      </div>
      <button
        onClick={() => remove(id)}
        className="border border-slate-400 rounded px-3 py-1 hover:bg-slate-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
