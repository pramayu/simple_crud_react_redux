import React, { Component } from 'react';
import { Link } from 'react-router';

class GameCard extends Component {
  render(){
    return(
      <div className='ui card'>
        <div className='image'>
          <img src={this.props.game.image} alt='game cover'/>
        </div>
        <div className='content'>
          <div className='header'>{this.props.game.title}</div>
        </div>
        <div className='extra content'>
          <div className='ui two buttons'>
            <Link to={`/game/${this.props.game._id}`} className='ui basic button green'>Edit</Link>
            <button className='ui basic button red' onClick={() => this.props.deleteGame(this.props.game._id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  game: React.PropTypes.object.isRequired,
  deleteGame: React.PropTypes.func.isRequired
}

export default GameCard;
