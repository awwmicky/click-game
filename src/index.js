// import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import data from './data.json'
import './index.css'
import Info from './components/Info/'
import Game from './components/Game/'



class App extends Component {
  
  constructor () {
    super()

    this.state = {
      user_score: 0,
      high_score: 0,
      initLoss: false,
      maxPoint: false,
      data: data
    };
  }



  maxScore = () => {
    this.setState({ maxPoint : true })
    window.open('https://shorturl.at/nuvAM')
  };

  firstLoss = () => {
    this.setState({ initLoss : true })
    window.open('https://www.omfgdogs.com/')
  };

  correctGuess = (item) => {
    console.log('Previous Score:', this.state.user_score)
    let { user_score,high_score  } = this.state;

    item.selected = true;
    (user_score < high_score) ? this.setState({ user_score : user_score + 1 }) :
    this.setState({ user_score: user_score + 1 , high_score: high_score + 1 });

    return ((++high_score) === 16) ? this.maxScore() : null;
  };

  resetGame = () => {
    console.log('State:', this.state)
    let { initLoss,data } = this.state;

    this.setState({ user_score : 0 })
    data.forEach( item => item.selected = false )
    
    return (initLoss === false) ? this.firstLoss() : null;
  };

  scoreBoard = ({ target }) => {
    // console.log('Select:', this.state.data[target.getAttribute('data-id')])
    let btn = this.state.data[ target.getAttribute('data-id') ];
    (btn.selected === false) ? this.correctGuess(btn) : this.resetGame();
  };

  renderCard = (data) => {
    data.sort( () => Math.random() - 0.5 )
    // console.log('Data:', data)

    return data.map( (item, id) => (
      <button 
        key={id}
        data-id={ id }
        data-selected={ item.selected }
        className={ `btn btn-${item.id}` }
        onClick={ this.scoreBoard }
      >{ item.num }
      </button>
    ));
  };



  render () {
    console.log('Current Score:', this.state.user_score)
    let { user_score,high_score,data } = this.state;
    let { renderCard } = this;

    return (
      <section className="App">
        <Info
          user_score={ user_score }
          high_score={ high_score }
        />

        <Game
          renderCard={ renderCard }
          data={ data }
        />
      </section>
    );
  }

}



const root = document.getElementById('root');
ReactDOM.render( <App />, root )
// serviceWorker.unregister();