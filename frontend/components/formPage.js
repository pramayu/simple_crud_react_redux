import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { saveGame } from '../actions/games';

class FormPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      cover: '',
      errors: {},
      loading: false,
      done: false
    }
  }

  handleChange(event){
    if(!!this.state.errors[event.target.name]){
      let errors = Object.assign({}, this.state.errors);
      delete errors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmit(event){
    event.preventDefault();
    // validation
    let errors = {};
    if(this.state.title === '') errors.title = "Can't be empty";
    if(this.state.cover === '') errors.cover = "Can't be empty";
    this.setState({errors});

    const isValid = Object.keys(errors).length === 0;

    if(isValid) {
      const { title, cover } = this.state;
      this.setState({loading: true});
      this.props.saveGame({title, cover}).then(
        () => {this.setState({done: true})},
        // (err) => err.response.json().then(({errors}) => this.setState({errors, loading: false }))
        () => this.setState({loading: false})
      );
    }
  }

  render(){
    const form = (
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit.bind(this)}>
        <h1>Add New Games!</h1>

        {!!this.state.errors.global && <div className='ui negative message'><p>{this.state.errors.global}</p></div>}

        <div className={classnames('field', {error: !!this.state.errors.title})}>
          <label htmlFor='title'>Title</label>
          <input id='title' name='title' value={this.state.title} onChange={this.handleChange.bind(this)} />
          <span>{this.state.errors.title}</span>
        </div>

        <div className={classnames('field', {error: !!this.state.errors.cover})}>
          <label htmlFor='cover'>Cover</label>
          <input id='cover' name='cover' value={this.state.cover} onChange={this.handleChange.bind(this)} />
          <span>{this.state.errors.cover}</span>
        </div>

        <div className='field'>
          { this.state.cover !== '' &&<img src={this.state.cover} alt='cover' className='ui small bordered image' /> }
        </div>

        <div className='field'>
          <button className='ui primary button'>Save</button>
        </div>

      </form>
    );
    return (
      <div>
        { this.state.done ? <Redirect from="/games/new" to="/games" /> : form }
      </div>
    );
  }
}



export default connect(null, { saveGame })(FormPage);
