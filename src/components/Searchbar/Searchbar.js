import React, { Component } from 'react';
import { SearchbarStyled } from './SeachBarStyled';

class Searchbar extends Component {
  state = { query: '' };

  onHandleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <SearchbarStyled>
        <form className="SearchForm" onSubmit={this.onHandleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={this.onHandleChange}
          />
        </form>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;
