import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: '',
  };

  onSubmitChange = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onSubmitChange} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type='text'
            />
          </div>
        </form>
      </div>
    );
  }
}
