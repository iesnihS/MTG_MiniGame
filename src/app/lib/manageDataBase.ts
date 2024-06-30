import { configDotenv } from "dotenv";
import { Catalog } from "./definitions";
import { CheckCardType } from "./definitions";
import { db } from "@vercel/postgres";
import { Card } from "./definitions";
import { Client } from "@vercel/postgres";

export async function GetCatalog() {
  const data = await fetch("https://api.scryfall.com/catalog/card-names");
  const catalog = (await data.json()) as Catalog;
  return catalog;
}

export async function GetAllEDHCardsDatas() {
  let cardsData;
  (await GetCatalog()).data.forEach((e) => {});
}

export function GetCurrenStringFormat(oldName: string): string {
  let newName = oldName.split(" /")[0];
  newName = newName.replace(/[\s]/gi, "-");
  newName = newName.replace(/'/gi, "");
  newName = newName.toLowerCase();
  newName = newName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return newName;
}

export const insertedCardsData = async () => {
  const postgresUrl = process.env.POSTGRES_URL;

  const client = await db.connect();

  await client.connect();
  const { data } = await GetCatalog();
  for (let e of data) {
    const formatName = GetCurrenStringFormat(e);
    const response = await fetch(
      `https://json.edhrec.com/pages/cards/${formatName}.json`
    );
    const jsonCard = await response.json();
    if (CheckCardType(jsonCard)) {
      client.query(` INSERT INTO Cards (name)
        VALUES (${jsonCard.container.json_dict.card.name});`);
    }
  }
};
