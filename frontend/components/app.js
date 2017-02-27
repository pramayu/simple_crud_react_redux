import React, { Component } from 'react';
import { Link, Route } from 'react-router';

class App extends Component {
  render(){
    return(
      <div className='ui container'>
        <div className='ui three item menu'>
          <Link className='item' activeClassName='active' onlyActiveOnIndex={true} to='/'>Home</Link>
          <Link className='item' activeClassName='active' onlyActiveOnIndex={true} to='/games'>Games</Link>
          <Link className='item' activeClassName='active' onlyActiveOnIndex={true} to='/games/new'>New Games</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
