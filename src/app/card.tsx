import Image from "next/image";

export default async function Card (){
const getRandomCardFromDB = async()=>
    {
      const data =  await fetch("https://mtg-mini-game-back.vercel.app/cardAPI/randomcard",{
        cache: "no-store",
      });
      return data;
    }
    let randomcard = await getRandomCardFromDB();
    let jsonCard = (await randomcard.json()).rows[0];
    console.log(jsonCard);
    {
        return<><Image src={jsonCard.image_normal}
        width={488}
        height={680}
        priority={true}
        alt={jsonCard.name}></Image></>
    };}