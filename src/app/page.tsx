import { Card, CheckCardType} from "./lib/definitions";
import styles from "./page.module.css";
import { GetCatalog } from "./lib/formatData";

export default async function Home() {
  let cardJSON;
  const card = await fetch(
    "https://json.edhrec.com/pages/cards/tatsunari-toad-rider.json"
  );
  
  cardJSON = (await card.json()) as Card;
  console.log("Start Debug");
  console.log(CheckCardType(card));
  console.log("End Debug");
  return (
    <main className={styles.main}>
      {cardJSON.container.json_dict.card.name}
    </main>
  );
}
