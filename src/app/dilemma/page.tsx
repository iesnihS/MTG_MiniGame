import styles from "../styles/page.module.css";
import Dilemma from "./components/dilemma";
import Profile from "./components/profile";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Dilemma></Dilemma>
      <Dilemma></Dilemma>
    </main>
  );
}
