import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppLoader } from '../components/Loader/Loader';
import { fetchTrendingMovies } from '../services/api';
import { HomePageStyled } from '../styles/HomePageStyled';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const results = await fetchTrendingMovies();
      this.setState({ movies: results, isLoading: false });
    } catch (error) {
      console.log(`error`, error);
    }
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        <HomePageStyled>
          <h2 className="homeMoviesTitle">Trending today</h2>
          <ul className="homeMoviesList">
            {!!movies.length &&
              movies.map(({ id, title, poster_path }) => (
                <li className="homeMoviesItem" key={id}>
                  <Link
                    to={{
                      pathname: `/movies/${id}`,
                      state: { from: this.props.location.pathname },
                    }}
                    className="homeMoviesLink"
                  >
                    <img
                      src={'https://image.tmdb.org/t/p/w300' + poster_path}
                      alt={title}
                      className="homeMoviesImg"
                    />
                    <h2 className="moviesTitle">{title}</h2>
                  </Link>
                </li>
              ))}
          </ul>
        </HomePageStyled>
        {isLoading && <AppLoader />}
      </>
    );
  }
}

export default HomePage;
