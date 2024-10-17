export const Filter = () => {
  return (
    <div className="flex-[2] w-full mb-1 pl-1 text-secondary rounded-xl border border-secondary">
      <h2 className="m-2">Filtrer</h2>
      <ul className="flex-col max-md:flex max-md:flex-row gap-2">
        <li>
          <label>
            <input
              className="m-3 max-md:m-1"
              type="checkbox"
              id="all"
              name="all"
            />
            Toutes
          </label>
        </li>
        <li>
          <label>
            <input
              className="m-3 max-md:m-1"
              type="checkbox"
              id="en-cours"
              name="En cours"
            />
            En cours
          </label>
        </li>
      </ul>
      <ul className="flex-col max-md:flex max-md:flex-row gap-2">
        <li>
          <label>
            <input
              className="m-3 max-md:m-1"
              type="checkbox"
              id="date"
              name="date"
            />
            Par date d&apos;échéance
          </label>
        </li>
        <li>
          <label>
            <input
              className="m-3 max-md:m-1"
              type="checkbox"
              id="fini"
              name="fini"
            />
            Terminées
          </label>
        </li>
      </ul>
    </div>
  );
};
