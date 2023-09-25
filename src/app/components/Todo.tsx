"use client";

type todoProps = {
  id: string;
  title: string;
  checked: boolean;
  check: (id: string, checked: boolean) => void;
};

const Todo = ({ id, title, checked, check }: todoProps) => {
  return (
    <div className="todo">
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
    </div>
  );
};

export default Todo;
