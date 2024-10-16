import { Body } from "./_components/Body";
import { Form } from "./_components/Form";
import { Header } from "./_components/Header";
import { Spacing } from "./_components/Spacing";

export default function Home() {
  return (
    <main className="bg-primary">
      <Header />
      <Spacing />
      <Body />
      <Spacing />
    </main>
  );
}
