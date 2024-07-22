"use client";

import { CardData } from "@/app/lib/definitions";
import { useState, useEffect } from "react";

export default function Profile() {
  const [data, setData] = useState<CardData>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mtg-mini-game-back.vercel.app/cardAPI/randomcard")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.image_normal}</p>
    </div>
  );
}
