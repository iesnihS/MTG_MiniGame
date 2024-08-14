import Image from "next/image";
import { CardData } from "../lib/definitions";
import style from "@/app/styles/card.module.css";
import { useEffect, useState } from "react";
interface CardProps {
  cardJson: CardData;
  resolvedDilemma: boolean;
  stateShowCard: any;
  countDeck: number;
}

export default function Card({
  cardJson,
  resolvedDilemma,
  stateShowCard,
  countDeck,
}: CardProps) {
  {
    useEffect(() => {}, [stateShowCard]);
    let styleCard = style.card;

    if (!cardJson) return <></>;
    return (
      <>
        <div
          className={styleCard}
          onClick={() => {
            stateShowCard[1]();
          }}
        >
          <Image
            src={cardJson.image_normal}
            width={390}
            height={544}
            priority={true}
            alt={cardJson.name}
          ></Image>
          <div className={stateShowCard[0] ? "" : style.textcard}>
            {parseFloat(cardJson.playrate).toFixed(5) + "%"}
          </div>
          <div
            className={stateShowCard[0] ? "" : style.textcard}
          >{`${cardJson.name} is in ${cardJson.num_decks} decks, on ${countDeck} commander decks listed`}</div>
        </div>
      </>
    );
  }
}
