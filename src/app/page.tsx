import { headers } from "next/headers";
import styles from "./styles/page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <a href="/dilemma">MiniGame</a>
    </main>
  );
}
