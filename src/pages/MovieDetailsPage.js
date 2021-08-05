import React, { Component, lazy, Suspense } from 'react';
import { fetchSearchMoviesDetails } from '../services/api';
import { AppLoader } from '../components/Loader/Loader';
import { NavLink, Route, Switch } from 'react-router-dom';
import { MovieDetailsStyled } from '../styles/MovieDetailsPageStyled';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
class MovieDetailsPage extends Component {
  state = {
    details: [],
    from: null,
    loaded: false,
    isLoading: false,
  };

  async componentDidMount() {
    const id = this.props.match.params.id || '';
    try {
      this.setState({ isLoading: true });
      const res = await fetchSearchMoviesDetails(id);
      this.setState({
        details: res,
        from: this.props.location.state.from,
        isLoading: false,
        loaded: true,
      });
    } catch (error) {
      console.log('🚀 ~ error', error);
    }
  }

  render() {
    const id = this.props.match.params.id || '';
    const { isLoading, loaded } = this.state;
    const { poster_path, title, release_date, vote_average, overview, genres } =
      this.state.details;
    if (!loaded || isLoading) return null;

    const imgUrl = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/';
    const date = new Date(release_date).getFullYear();
    return (
      <MovieDetailsStyled>
        <button
          className="backBtn"
          type="button"
          onClick={() => this.props.history.push(this.state.from)}
        >
          &larr; Go back
        </button>
        <article>
          {poster_path ? <img src={imgUrl + poster_path} alt={title} /> : null}
          <h2>
            {title ? title : null} ({date ? date : null})
          </h2>
          {vote_average ? <p>Rating: {vote_average}%</p> : null}
          <h3>Overview</h3>
          {overview ? <p>{overview}</p> : null}
          <h4>Genres</h4>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <NavLink
            className="infoLink"
            activeClassName="infoLinkActive"
            to={`/movies/${id}/reviews`}
          >
            Reviews
          </NavLink>
          <NavLink
            className="infoLink"
            activeClassName="infoLinkActive"
            to={`/movies/${id}/cast`}
          >
            Cast
          </NavLink>
        </article>

        <div className="infoBox">
          <Suspense fallback={AppLoader()}></Suspense>
          <Switch>
            <Route path="/movies/:id/reviews" exact component={Reviews} />
            <Route path="/movies/:id/cast" exact component={Cast} />
          </Switch>
        </div>
        {isLoading && <AppLoader />}
      </MovieDetailsStyled>
    );
  }
}

export default MovieDetailsPage;
