import { Card, CheckCardType} from "./lib/definitions";
import styles from "./page.module.css";
import { GetCatalog, GetCurrenStringFormat} from "./lib/formatData";

export default async function Home() {
  let cardJSON;
  const card = await fetch(
    "https://json.edhrec.com/pages/cards/tatsunari-toad-rider.json"
  );
  
  cardJSON = (await card.json()) as Card;
  GetCurrenStringFormat("Wolfbitten Captive // Krallenhorde Killer");
  return (
    <main className={styles.main}>
      {cardJSON.container.json_dict.card.name}
    </main>
  );
}
