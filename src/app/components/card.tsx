import Image from "next/image";
import { CardData } from "../lib/definitions";
import style from "@/app/styles/card.module.css";

interface CardProps {
  cardJson: CardData;
}

export default function Card({ cardJson }: CardProps) {
  {
    if (!cardJson) return <></>;

    return (
      <>
        <div className={style.card}>
          <Image
            src={cardJson.image_normal}
            width={488}
            height={680}
            priority={true}
            alt={cardJson.name}
          ></Image>
          <div>{parseFloat(cardJson.playrate).toFixed(2) + "%"}</div>
        </div>
      </>
    );
  }
}
