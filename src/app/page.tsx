import { BurgerCard } from "@/components/burger-card";
import { getBurgerList } from "@/service";
import { BurgerDataObject } from "@/utils/types";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Burger Listing',
  description: 'This is page where burger is listed',
}
export default async function Home() {
  const burgers: BurgerDataObject[] = await getBurgerList();

  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        burgers.map((burger: BurgerDataObject) => <BurgerCard key={burger.id} burger={burger} />)
      }
    </section>
  );
}
