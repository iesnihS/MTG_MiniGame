import { Catalog } from "./definitions";

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
