import { Card, CheckCardType} from "./lib/definitions";
import styles from "./page.module.css";
import { GetCatalog, GetCurrenStringFormat} from "./lib/manageDataBase";

export default async function Home() {

  const testFetch = async()=>
    {
      const data =  await fetch("http://localhost:3001/cardAPI/test", {method: 'POST',  headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({Fourmis : "Mante"})});
    }
  
  testFetch();
  return (
    <main className={styles.main}>
    </main>
  );
}
