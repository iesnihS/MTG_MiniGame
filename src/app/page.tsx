import styles from "./page.module.css";
import Button from "./components/button";

export default async function Home() {
  return (
    <main className={styles.main}>
      <a href="/dilemma">MiniGame</a>
    </main>
  );
}
