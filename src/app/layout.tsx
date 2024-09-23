import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToDoList",
  description:
    "Organisez votre journée facilement avec notre application de To-Do List intuitive. Créez, gérez et priorisez vos tâches pour rester productif. Que ce soit pour des projets professionnels ou personnels, notre outil de gestion des tâches vous permet de suivre vos progrès en temps réel, de définir des rappels et d'améliorer votre productivité. Accessible sur tous les appareils, notre To-Do List vous aide à accomplir vos objectifs rapidement et efficacement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
