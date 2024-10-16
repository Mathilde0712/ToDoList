export const Form = () => {
  return (
    <div className="flex-[3] w-full mb-1 pl-1 text-secondary rounded-xl border border-secondary shadow ">
      <h2>Ajouter une tâche</h2>
      <form>
        <ul>
          <li>
            <label>
              Titre :
              <input type="text" id="titre" name="titre" />
            </label>
          </li>
          <li>
            <label>
              Description :
              <textarea id="description" name="description" />
            </label>
          </li>
          <li>
            <label>
              Date d'échéance :
              <input
                type="date"
                id="date"
                name="date"
                min="2024-10-09"
                max="2030-12-31"
              />
            </label>
          </li>
        </ul>
        <div className="flex">
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
};
