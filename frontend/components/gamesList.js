import React, { Component } from 'react';
import GameCard from './gameCard';

class GamesList extends Component {

  render(){
    const emptyMessage = (
      <p>There are no games yet in collections.</p>
    );

    const gamesList = (
      <div className='ui four cards'>
        { this.props.games.map(game => <GameCard game={game} key={game._id} deleteGame={this.props.deleteGame} />)}
      </div>
    );

    return(
      <div>
        {this.props.games.length === 0 ? emptyMessage : gamesList}
      </div>
    );
  }
}

GamesList.propTypes = {
  games: React.PropTypes.array.isRequired,
  deleteGame: React.PropTypes.func.isRequired
}

export default GamesList;
