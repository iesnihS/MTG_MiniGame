import styles from "../page.module.css";
import Card from "../components/card";
import { CardData } from "../lib/definitions";

export default async function Home() {
  const getRandomCardFromDB = async () => {
    const data = await fetch(
      "https://mtg-mini-game-back.vercel.app/cardAPI/randomcard",
      {
        cache: "no-store",
      }
    );
    console.log("fetch done, data");
    return (await data.json()) as CardData;
  };

  let card1: CardData = await getRandomCardFromDB();
  console.log(card1);
  let card2: CardData = await getRandomCardFromDB();
  console.log(card2);

  let i = 10;
  while (i > 0) {
    if (card1.name !== card2.name) break;
    card2 = await getRandomCardFromDB();
    i--;
  }

  return (
    <main className={styles.main}>
      <div className={styles.quizzContainer}>
        <Card cardJson={card1}></Card>
        <Card cardJson={card2}></Card>
      </div>
    </main>
  );
}
