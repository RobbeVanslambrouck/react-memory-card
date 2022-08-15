import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardDeck = () => {
  const [cards, setCards] = useState(["test", "nice", "more cards"]);

  const shiffleDeck = (deck) => {
    let newDeck = deck;
    let picked, temp;
    for (let i = newDeck.length - 1; i >= 0; i--) {
      picked = Math.floor(Math.random() * i);
      temp = newDeck[i];
      newDeck[i] = newDeck[picked];
      newDeck[picked] = temp;
    }
    return newDeck;
  };

  const handleCardClick = (cardTitle) => {
    console.log(cardTitle);
    setCards(() => shiffleDeck(cards));
  };
  return (
    <div className="card-deck">
      {cards.map((card) => (
        <Card title={card} onClick={handleCardClick} key={card} />
      ))}
    </div>
  );
};

export default CardDeck;
