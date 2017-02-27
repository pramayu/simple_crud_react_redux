import React, { Component } from 'react';

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
      </div>
    );
  }
}

GameCard.propTypes = {
  game: React.PropTypes.object.isRequired
}

export default GameCard;
