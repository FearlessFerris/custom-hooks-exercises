import React, { useState, useEffect } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
const CardTable = () => {

  const [cards, setCards] = useAxios( 'https://deckofcardsapi.com/api/deck/new/draw/' )
  
  const fetchNewCards = () => {
    setCards('https://deckofcardsapi.com/api/deck/new/draw/');
  };
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={ fetchNewCards }>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
          ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
