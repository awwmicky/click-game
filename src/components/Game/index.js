import React from 'react'
import './game.css'



export default function Game ({ renderCard,data }) {
  return (
    <div className="board-game">
      { renderCard(data) }
    </div>
  );
}