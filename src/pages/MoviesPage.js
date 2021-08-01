import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import { fetchSearchMovies } from '../services/api';
import queryString from 'query-string';
import MoviesList from '../components/MoviesList/MoviesList';
import { AppLoader } from '../components/Loader/Loader';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    moviesInfo: [],
    isLoading: false,
  };
  componentDidMount() {
    const { location } = this.props;

    const { query } = queryString.parse(location.search);

    if (query) {
      this.setState({
        searchQuery: query,
        moviesInfo: [],
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      moviesInfo: [],
    });
    this.props.history.push({ search: `query=${query}` });
  };

  fetchMovies = async () => {
    const { searchQuery } = this.state;
    this.setState({ isLoading: true });
    try {
      const res = await fetchSearchMovies(searchQuery);
      return this.setState({
        moviesInfo: res,
        isLoading: false,
      });
    } catch (error) {
      console.log(`error`, error);
    }
  };

  render() {
    const { moviesInfo, isLoading } = this.state;
    console.log(this.state.moviesInfo);
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {!!moviesInfo.length && (
          <MoviesList moviesInfo={moviesInfo} location={this.props.location} />
        )}
        {isLoading && <AppLoader />}
      </>
    );
  }
}

export default MoviesPage;
