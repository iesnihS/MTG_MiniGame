import { Catalog } from "./definitions";

export async function GetCatalog()
{
    const data = await fetch("https://api.scryfall.com/catalog/card-names");
    const catalog = (await data.json()) as Catalog;
    return catalog;
}