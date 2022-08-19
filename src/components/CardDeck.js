import React, { useState } from "react";
import Card from "./Card";
import { shuffle } from "../helper";
import "../styles/cardDeck.css";

const CardDeck = (props) => {
  const [deck, setDeck] = useState(() => [...shuffle(props.cards || [])]);

  const handleCardClick = (cardTitle) => {
    setDeck(() => [...shuffle(deck)]);
    if (props.onCardClick) props.onCardClick(cardTitle);
  };

  return (
    <div className="card-deck">
      {deck.map((card) => (
        <Card
          name={card}
          imgPath={`${process.env.PUBLIC_URL}${props.dirPath}/${card}`}
          onClick={handleCardClick}
          key={card}
        />
      ))}
    </div>
  );
};

export default CardDeck;
