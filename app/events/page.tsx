"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const cards = [
    {
      id: 1,
      title: "Event name",
      description: "",
      imageSrc:
        "/events/",
      category: "upcoming",
    },
    {
      id: 2,
      title: "Event name",
      description: "",
      imageSrc:
        "/events/",
      category: "past",
    },
  ];

  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true;
    return card.category === filter;
  });

  return (
   <>
   <h1>Events</h1>
   </>
  );
}
