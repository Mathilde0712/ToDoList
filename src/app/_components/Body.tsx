import { Filter } from "./Filter";
import { Form } from "./Form";

export const Body = () => {
  return (
    <main className="flex gap-2 justify-center mx-28 max-md:mx-8 max-md:flex-col ">
      <Form />
      <Filter />
    </main>
  );
};
