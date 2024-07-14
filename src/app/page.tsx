import styles from "./page.module.css";
import Card from "./card";

export default async function Home() {  
  return (
    <main className={styles.main}>
      <Card></Card>
    </main>
  );
}


// const testFetch = async()=>
//   {
//     const data =  await fetch("http://localhost:3001/cardAPI/test", {method: 'POST',  headers: {
//       'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({Fourmis : "Mante"})});
//   }