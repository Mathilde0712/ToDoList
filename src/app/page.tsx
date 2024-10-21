import { Header } from "./_components/Header";
import { Spacing } from "./_components/Spacing";

import { Body } from "./_components/Body";

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
