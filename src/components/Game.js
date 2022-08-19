import React, { useState, useEffect } from "react";
import CardDeck from "./CardDeck";
import "../styles/game.css";
import cardsJSON from "../cards.json";
import { shuffle } from "../helper";

const HANAFUDA_CARDS = 0;
const ENGLISH_PLAYING_CARDS = 1;

const CURRENT_CARD_DECK = HANAFUDA_CARDS;
const cardsData = cardsJSON[0].contents[CURRENT_CARD_DECK].contents;

const getCardPaths = (amount, cardsData) => {
  return shuffle(cardsData)
    .slice(0, amount)
    .map((card) => card.name);
};

const Game = () => {
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState({ count: 0 });
  const [numOfCards, setNumOfCards] = useState(3);
  const [cards, setCards] = useState(() => getCardPaths(numOfCards, cardsData));

  useEffect(() => {
    if (score > highscore) setHighscore(score);
  }, [score, highscore]);

  useEffect(() => {
    setCards(() => [...getCardPaths(numOfCards, cardsData)]);
  }, [numOfCards]);

  const handleCardClick = (title) => {
    if (clickedCards[title]) {
      console.log("game over");
      setClickedCards({ count: 0 });
      setScore(0);
      setNumOfCards(3);
      return;
    }
    clickedCards.count += 1;
    clickedCards[title] = true;
    setScore((prevScore) => prevScore + 1);
    if (clickedCards.count === cards.length) {
      setScore((prevScore) => prevScore + numOfCards);
      setNumOfCards((prev) => prev + 1);
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
      <CardDeck
        dirPath={`/cards/${cardsJSON[0].contents[CURRENT_CARD_DECK].name}`}
        cards={cards}
        key={cards}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default Game;
