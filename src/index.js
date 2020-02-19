// import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import data from './data.json'
import './index.css'



class App extends Component {
  
  constructor () {
    super()

    this.state = {
      user_score: 0,
      high_score: 0,
      data: data
    };
  }



  correctGuess = (item) => {
    console.log('Previous Counter:', this.state.user_score)
    let { user_score,high_score } = this.state;

    item.clicked = true;
    (user_score < high_score) ? this.setState({ user_score : user_score + 1 }) :
    this.setState({ user_score: user_score + 1 , high_score: high_score + 1 });
  };

  resetGame = () => {
    console.log('State:', this.state)
    this.state.data.forEach( item => item.clicked = false )
    this.setState({ user_score : 0 })
  };

  scoreBoard = ({ target }) => {
    // console.log('Data:', this.state.data[target.getAttribute('data-id')])
    let data = this.state.data[ target.getAttribute('data-id') ];
    (data.clicked === false) ? this.correctGuess(data) : this.resetGame();
  };

  renderCard = (data) => {
    data.sort( () => Math.random() - 0.5 )
    console.log('Data:', this.state.data)

    return data.map( (item, id) => (
      <button 
        key={id}
        className={ `btn btn-${item.id}` }
        data-id={ id }
        data-clicked={ item.clicked }
        onClick={ this.scoreBoard }
      >{ item.num }
      </button>
    ));
  };



  render () {
    console.log('Current Counter:', this.state.user_score)
    let { user_score,high_score,data } = this.state;
    let { renderCard } = this;

    return (
      <section className="App">
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

        <div className="board-game">
          { renderCard(data) }
        </div>
      </section>
    );
  }

}



const root = document.getElementById('root');
ReactDOM.render( <App />, root )
// serviceWorker.unregister();