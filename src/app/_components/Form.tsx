export const Form = () => {
  return (
    <div className="flex-[3] w-full mb-1 pl-1 text-secondary rounded-xl border border-secondary shadow items-center ">
      <h2 className="m-2">Ajouter une tâche</h2>
      <form className="flex flex-col ">
        <ul className="flex flex-col">
          <li>
            <label>
              <input
                className="border border-secondary rounded-md m-2 w-9/12 p-2 "
                type="text"
                id="titre"
                name="titre"
                placeholder="Titre"
              />
            </label>
          </li>
          <li>
            <label>
              <input
                className="border border-secondary rounded-md m-2 w-9/12 p-2"
                id="description"
                name="description"
                placeholder="Description"
              />
            </label>
          </li>
          <li>
            <label>
              <input
                className="border border-secondary rounded-md m-2 w-9/12 p-2 "
                type="date"
                id="date"
                name="date"
                max="2030-12-31"
              />
            </label>
          </li>
        </ul>
        <div className="flex">
          <button
            className="border border-secondary rounded-md m-2 w-9/12 p-2"
            type="submit"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};
