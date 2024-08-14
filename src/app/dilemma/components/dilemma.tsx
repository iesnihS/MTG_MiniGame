"use client";

import { useEffect, useRef, useState } from "react";
import Card from "../../components/card";
import { CardData } from "../../lib/definitions";
import styles from "../styles/dilemma.module.css";

interface DilemmaProps {
  onClick: any;
}

export default function Dilemma() {
  const score = useRef(0);
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
        body: JSON.stringify({ rate: 2, number: 2 }),
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
  }, [card1, card2]);

  const ShowTheCards = (card: CardData) => {
    if (card === card1 && card1IsMorePopular) score.current++;
    else if (card === card2 && !card1IsMorePopular) score.current++;
    else score.current = 0;
    setShowCard(true);
  };
  if (card1 === null || card2 === null || countDeck === 0) return <></>;

  let card1IsMorePopular =
    parseInt(card2.num_decks) < parseInt(card1.num_decks);

  return (
    <div className={styles.dilemmaContainer}>
      <div className={styles.header}>
        <a className={styles.mainMenuButton} href="/">
          Main Menu
        </a>
      </div>

      <div className={styles.quizzContainer}>
        <div className={styles.cardsContainer}>
          <Card
            cardJson={card1}
            resolvedDilemma={card1IsMorePopular}
            stateShowCard={[
              showCard,
              () => {
                ShowTheCards(card1);
              },
            ]}
            countDeck={countDeck}
          ></Card>
          <Card
            cardJson={card2}
            resolvedDilemma={!card1IsMorePopular}
            stateShowCard={[
              showCard,
              () => {
                ShowTheCards(card2);
              },
            ]}
            countDeck={countDeck}
          ></Card>
        </div>

        <div
          onClick={() => {
            setCard1(null);
            setCard2(null);
            setShowCard(false);
          }}
        >
          MiniGame
        </div>
        <div>{score.current}</div>
      </div>
    </div>
  );
}
