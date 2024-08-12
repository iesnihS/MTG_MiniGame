import styles from "../styles/page.module.css";
import Dilemma from "./components/dilemma";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Dilemma></Dilemma>
    </main>
  );
}
