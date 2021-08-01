import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MoviesListStyled } from './MoviesListStyled';

class MoviesList extends Component {
  state = {};
  render() {
    const imageUrl = 'https://image.tmdb.org/t/p/w300';
    return (
      <MoviesListStyled>
        {this.props.moviesInfo.map(({ id, poster_path, title }) => (
          <li key={id} className="moviesItem">
            <Link
              className="moviesLink"
              to={{
                pathname: `/movies/${id}`,
                state: { from: this.props.location },
              }}
            >
              <img
                src={imageUrl + poster_path}
                alt={title}
                className="moviesImg"
              />
              <h2 className="moviesTitle">{title}</h2>
            </Link>
          </li>
        ))}
      </MoviesListStyled>
    );
  }
}

export default MoviesList;
