export const Header = () => {
  return (
    <header className="flex justify-around mt-1 max-md:flex-col mx-8">
      <h1 className="text-center font-bold text-primary text-base">
        TO DO LIST
      </h1>
      <ul className="flex text-primary max-md:justify-center">
        <li className="pr-2">Ajouter une tâche</li>
        <li>Mes tâches</li>
      </ul>
    </header>
  );
};
