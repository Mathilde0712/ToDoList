export const Form = () => {
  return (
    <div className="flex flex-col justify-center mx-28 max-md:mx-8">
      <div className="flex justify-center mb-1">
        <h2>Ajouter une tâche</h2>
      </div>
      <div className="flex justify-start border-solid border-black border-2 ">
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
          <div className="flex justify-center">
            <button type="submit">Valider</button>
          </div>
        </form>
      </div>
    </div>
  );
};
