import { Card } from "./lib/definitions";
import styles from "./page.module.css";

export default async function Home() {
  let cardJSON;
  const card = await fetch(
    "https://json.edhrec.com/pages/cards/psychic-frog.json"
  );
  cardJSON = (await card.json()) as Card;
  return (
    <main className={styles.main}>
      {cardJSON.container.json_dict.card.name}
    </main>
  );
}
