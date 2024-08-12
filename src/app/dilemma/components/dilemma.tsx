"use client";

import { useEffect, useRef, useState } from "react";
import Card from "../../components/card";
import { CardData } from "../../lib/definitions";
import styles from "../styles/dilemma.module.css";

interface DilemmaProps {
  onClick: any;
}

export default function Dilemma() {
  const [card1, setCard1] = useState<CardData>(null);
  const [card2, setCard2] = useState<CardData>(null);
  const [showCard, setShowCard] = useState(false);
  const [countDeck, setCountDeck] = useState(0);

  useEffect(() => {
    if (!card1 && !card2) {
      fetch("https://mtg-mini-game-back.vercel.app/cardAPI/getcardbyplayrate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rate: 10, number: 2 }),
        cache: "no-store",
      }).then((res) => {
        res.json().then((json) => {
          const randIndex = Math.random();
          setCard1(json[randIndex > 0.5 ? 0 : 1]);
          setCard2(json[randIndex > 0.5 ? 1 : 0]);
        });
      });
      fetch("https://mtg-mini-game-back.vercel.app/cardAPI/countDecks", {
        cache: "no-store",
      }).then((response) => {
        response.json().then((json) => {
          setCountDeck(json.count);
        });
      });
    }
  }, []);

  if (card1 === null || card2 === null || countDeck === 0) return <></>;

  let card1IsMorePopular = null;
  if (parseFloat(card1.playrate) === parseFloat(card2.playrate)) {
    const factor =
      parseFloat(card1.potential_decks) / parseFloat(card2.potential_decks);
    const nominator = parseFloat(card2.num_decks) * factor;
    card1IsMorePopular = nominator < parseInt(card1.num_decks);
  }

  card1IsMorePopular =
    card1IsMorePopular === null
      ? parseFloat(card1.playrate) > parseFloat(card2.playrate)
      : card1IsMorePopular;

  return (
    <div className={styles.quizzContainer}>
      <Card
        cardJson={card1}
        resolvedDilemma={card1IsMorePopular}
        stateShowCard={[showCard, setShowCard]}
        countDeck={countDeck}
      ></Card>
      <Card
        cardJson={card2}
        resolvedDilemma={!card1IsMorePopular}
        stateShowCard={[showCard, setShowCard]}
        countDeck={countDeck}
      ></Card>
      <a href="/dilemma">MiniGame</a>
    </div>
  );
}
