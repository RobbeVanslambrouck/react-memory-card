import React, { useState, useEffect } from "react";
import CardDeck from "./CardDeck";

const Game = () => {
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState({ count: 0 });
  const [cards, setCards] = useState([
    "HA",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "H8",
    "H9",
    "H10",
    "HJ",
    "HQ",
    "HK",
  ]);

  useEffect(() => {
    if (score > highscore) setHighscore(score);
  }, [score]);

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
      console.log("won");
      setClickedCards({ count: 0 });
      return;
    }
  };
  return (
    <div>
      <p>Game</p>
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
