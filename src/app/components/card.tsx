import Image from "next/image";
import { CardData } from "../lib/definitions";

interface CardProps {
  cardJson: CardData;
}

export default function Card({ cardJson }: CardProps) {
  {
    return (
      <>
        {cardJson ? (
          <Image
            src={cardJson.image_normal}
            width={488}
            height={680}
            priority={true}
            alt={cardJson.name}
          ></Image>
        ) : (
          <></>
        )}
      </>
    );
  }
}
