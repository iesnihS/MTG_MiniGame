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
    fetch("http://localhost:3001/cardAPI/getcardbyplayrate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rate: 90, number: 2 }),
      cache: "no-store",
    }).then((res) => {
      res.json().then((json) => {
        setCard1(json[0]);
        setCard2(json[1]);
        setLoading(false);
      });
    });
  }, []);

  if (loading) return <></>;

  return (
    <div className={styles.quizzContainer}>
      <Card cardJson={card1}></Card>
      <Card cardJson={card2}></Card>
    </div>
  );
}
