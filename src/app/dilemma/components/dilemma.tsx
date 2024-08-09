"use client";

import { useEffect, useState } from "react";
import Card from "../../components/card";
import { CardData } from "../../lib/definitions";
import styles from "../styles/dilemma.module.css";

export default function Dilemma() {
  const [card1, setCard1] = useState<CardData>(null);
  const [card2, setCard2] = useState<CardData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mtg-mini-game-back.vercel.app/cardAPI/getcardbyplayrate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rate: 10, number: 2 }),
      cache: "no-store",
    }).then((res) => {
      res.json().then((json) => {
        console.log(json);
      });
    });
    // if (card1 === null)
    //   fetch("https://mtg-mini-game-back.vercel.app/cardAPI/randomcard")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setCard1(data);
    //       setLoading(false);
    //     });
    // if (card2 === null)
    //   fetch("https://mtg-mini-game-back.vercel.app/cardAPI/randomcard")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setCard2(data);
    //       setLoading(false);
    //     });

    // if (card1 === null || card2 === null) return;

    // let i = 10;
    // while (i > 0) {
    //   if (card1?.name !== card2?.name) break;
    //   fetch("https://mtg-mini-game-back.vercel.app/cardAPI/randomcard")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setCard2(data);
    //       setLoading(false);
    //     });
    //   i--;
    // }

    setLoading(false);
  }, []);

  if (loading) return <></>;

  return (
    <div className={styles.quizzContainer}>
      <Card cardJson={card1}></Card>
      <Card cardJson={card2}></Card>
    </div>
  );
}
