"use client";
import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { Form } from "./Form";
import { Task } from "./Task";

export const Body = () => {
  const [formData, setFormData] = useState<
    { id: number; title: string; description: string; date: string }[]
  >([]);

  useEffect(() => {
    //permet d'accéder à localStorage côté client
    if (typeof window !== "undefined") {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setFormData(JSON.parse(storedTasks));
      }
    }
  }, []);

  useEffect(() => {
    //permet d'accéder à localStorage côté client
    if (typeof window !== "undefined" && formData.length > 0)
      localStorage.setItem("tasks", JSON.stringify(formData));
  }, [formData]);

  // Fonction pour mettre à jour les données du formulaire
  const handleFormSubmit = (data: {
    title: string;
    description: string;
    date: string;
  }) => {
    const newTask = {
      id: formData.length + 1,
      title: data.title,
      description: data.description,
      date: data.date,
    };

    setFormData((prev) => [...prev, newTask]);
  };
  // fonction qui permet de supprimer une tâche
  const deleteTask = (id: number) => {
    const updatedTasks = formData.filter((task) => task.id !== id);
    setFormData(updatedTasks);
  };

  // Fonction pour mettre à jour une tâche
  const updateTask = (
    id: number,
    updatedData: { title: string; description: string; date: string }
  ) => {
    const updatedTasks = formData.map((task) =>
      task.id === id ? { ...task, ...updatedData } : task
    );
    setFormData(updatedTasks);
  };

  return (
    <main className="flex flex-col">
      <div className="flex gap-2 justify-center mx-28 max-md:mx-8 max-md:flex-col ">
        <Form onSubmit={handleFormSubmit} />
        <Filter />
      </div>
      <Task tasks={formData} onDelete={deleteTask} onUpdate={updateTask} />
    </main>
  );
};
