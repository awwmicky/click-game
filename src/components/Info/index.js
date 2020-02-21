import React from 'react'
import './info.css'



export default function Info ({ user_score,high_score }) {
  return (
    <div className="game-info">
      <h1>Click Game</h1>
      <p>
        <span>RULES</span>
        <br/>
        <span>
          1.) do not click the same button twice
          <br/>
          2.) must follow rule number one
          <br/>
          3.) you'll know if you do one and two
        </span>
      </p>
      <p>
        <span className="user-score">your score: { user_score }</span> 
        <span> — </span>
        <span className="high-score">high score: { high_score }</span>
      </p>
    </div>
  );
}