import React, { useState, useEffect } from "react";
import CardDeck from "./CardDeck";
import "../styles/game.css";
import cardsJSON from "../cardNames.json";
import { shuffle } from "../helper";

const cardsData = cardsJSON[0].contents;

const Game = () => {
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState({ count: 0 });

  const getCardPaths = (amount, cardsData) => {
    if (amount > cardsData.length) {
      return cardsData.map((card) => cardsJSON[0].name.slice(2) + card.name);
    }
    const cards = shuffle(cardsData).slice(0, amount);
    return cards.map((card) => cardsJSON[0].name.slice(2) + card.name);
  };
  const [cards, setCards] = useState(getCardPaths(5, cardsData));

  useEffect(() => {
    if (score > highscore) setHighscore(score);
  }, [score, highscore]);

  const handleCardClick = (title) => {
    if (clickedCards[title]) {
      console.log("game over");
      setClickedCards({ count: 0 });
      setScore(0);
      return;
    }
    clickedCards.count += 1;
    clickedCards[title] = true;
    setScore(score + 1);
    if (clickedCards.count === cards.length) {
      setClickedCards({ count: 0 });
      console.log("won");
      return;
    }
  };

  return (
    <div>
      <div className="scoreboard">
        <div className="highscore">
          <p>highscore: </p>
          <p>{highscore}</p>
        </div>
        <div className="score">
          <p>score: </p>
          <p>{score}</p>
        </div>
      </div>
      <CardDeck cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default Game;
