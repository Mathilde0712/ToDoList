"use client";

import Image from "next/image";
import { useState } from "react";

export const Task = ({
  tasks,
  onDelete,
  onUpdate,
}: {
  tasks: { id: number; title: string; description: string; date: string }[];
  onDelete: (id: number) => void;
  onUpdate: (
    id: number,
    updatedData: { title: string; description: string; date: string }
  ) => void;
}) => {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<{
    title: string;
    description: string;
    date: string;
  }>({
    title: "",
    description: "",
    date: "",
  });
  // fonction pour modifier les tâches en faisant apparaître un nouveau formulaire
  const startEditing = (task: {
    id: number;
    title: string;
    description: string;
    date: string;
  }) => {
    setEditingTaskId(task.id);
    setEditedTask({
      title: task.title,
      description: task.description,
      date: task.date,
    });
  };

  const handleUpdate = (id: number) => {
    onUpdate(id, editedTask);
    setEditingTaskId(null);
  };

  return (
    <div className=" mx-28 max-md:mx-8 mb-1 pl-1 text-secondary rounded-xl border border-secondary shadow items-center ">
      <h2 className="m-2">Liste des tâches</h2>
      <ul className="m-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className=" flex border border-secondary p-4 mb-2 rounded-md"
          >
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTask.title}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, title: e.target.value })
                  }
                  className="mx-2 pl-2"
                />
                <input
                  type="text"
                  value={editedTask.description}
                  onChange={(e) =>
                    setEditedTask({
                      ...editedTask,
                      description: e.target.value,
                    })
                  }
                  className="mx-2 pl-2"
                />
                <input
                  type="date"
                  value={editedTask.date}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, date: e.target.value })
                  }
                  className="mx-2 pl-2"
                />
                <button className="mr-3" onClick={() => handleUpdate(task.id)}>
                  Valider
                </button>
                <button onClick={() => setEditingTaskId(null)}>Annuler</button>
              </>
            ) : (
              <>
                <input type="checkbox" name="task" />
                <h3 className="mx-2">{task.title}</h3>
                <p className="mx-2">{task.description}</p>
                <p className="mx-2">{task.date}</p>
                <Image
                  src="/pen.webp"
                  alt="modifer"
                  width={20}
                  height={20}
                  className="mr-2 cursor-pointer"
                  onClick={() => startEditing(task)}
                />
                <Image
                  src="/trash.webp"
                  alt="supprimer"
                  className="cursor-pointer"
                  width={15}
                  height={10}
                  onClick={() => onDelete(task.id)}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
