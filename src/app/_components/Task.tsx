"use client";

import { TrashIcon } from "./TrashIcon";

export const Task = ({
  tasks,
}: {
  tasks: { id: number; title: string; description: string; date: string }[];
}) => {
  return (
    <div className=" mx-28 max-md:mx-8 mb-1 pl-1 text-secondary rounded-xl border border-secondary shadow items-center ">
      <h2 className="m-2">Liste des tâches</h2>
      <ul className="m-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className=" flex border border-secondary p-4 mb-2 rounded-md"
          >
            <input type="checkbox" name="task" />
            <h3 className="mx-2">{task.title}</h3>
            <p className="mx-2">{task.description}</p>
            <p className="mx-2">{task.date}</p>
            <TrashIcon />
          </li>
        ))}
      </ul>
    </div>
  );
};
