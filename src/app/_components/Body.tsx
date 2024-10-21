"use client";
import { useState } from "react";
import { Filter } from "./Filter";
import { Form } from "./Form";
import { Task } from "./Task";

export const Body = () => {
  const [formData, setFormData] = useState([]);

  // Fonction pour mettre à jour les données du formulaire
  const handleFormSubmit = (data: {
    title: string;
    description: string;
    date: string;
  }) => {
    setFormData((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          title: data.title,
          description: data.description,
          date: data.date,
        },
      ];
    });
  };

  return (
    <main className="flex flex-col">
      <div className="flex gap-2 justify-center mx-28 max-md:mx-8 max-md:flex-col ">
        <Form onSubmit={handleFormSubmit} />
        <Filter />
      </div>
      <Task tasks={formData} />
    </main>
  );
};
