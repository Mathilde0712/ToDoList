"use client";
import { useState } from "react";

export const Form = ({
  onSubmit,
}: {
  onSubmit: (data: {
    title: string;
    description: string;
    date: string;
  }) => void;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const addTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const addDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // On envoie les données au composant parent via onSubmit
    onSubmit({ title, description, date });
    setTitle("");
    setDescription("");
    setDate("");
  };
  return (
    <div className="flex-[3] w-full mb-5 pl-1 text-secondary rounded-xl border border-secondary shadow items-center">
      <h2 className="m-2">Ajouter une tâche</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <ul className="flex flex-col">
          <li>
            <label>
              <input
                className="border border-secondary rounded-md m-2 w-9/12 p-2"
                type="text"
                id="titre"
                name="titre"
                placeholder="Titre"
                value={title}
                onChange={addTitle}
              />
            </label>
          </li>
          <li>
            <label>
              <input
                className="border border-secondary rounded-md m-2 w-9/12 p-2"
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                value={description}
                onChange={addDescription}
              />
            </label>
          </li>
          <li>
            <label>
              <input
                className="border border-secondary rounded-md m-2 w-9/12 p-2"
                type="date"
                id="date"
                name="date"
                max="2030-12-31"
                value={date}
                onChange={addDate}
              />
            </label>
          </li>
        </ul>
        {title && description && date && (
          <div className="flex">
            <button
              className="border border-secondary rounded-md m-2 w-9/12 p-2"
              type="submit"
            >
              Valider
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
