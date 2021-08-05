import React, { Component } from 'react';
import { AppLoader } from '../Loader/Loader';
import { fetchSearchMoviesCredits } from '../../services/api';
import { CastStyled } from '../../styles/CastStyled';

class Cast extends Component {
  state = {
    cast: [],
    isLoading: false,
  };

  async componentDidMount() {
    const id = this.props.match.params.id || '';
    try {
      this.setState({ isLoading: true });
      const res = await fetchSearchMoviesCredits(id);
      this.setState({ cast: res, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { cast, isLoading } = this.state;
    const imgUrl = 'https://www.themoviedb.org/t/p/w138_and_h175_face/';
    const defaultImg = 'http://simpleicon.com/wp-content/uploads/user1.png';

    return (
      <CastStyled>
        {cast.id ? (
          <ul className="castList">
            {cast.cast.map(
              ({ id, profile_path, original_name, character, name }) => (
                <li className="castItem" key={id}>
                  <img
                    className="castImg"
                    src={profile_path ? imgUrl + profile_path : defaultImg}
                    alt={name}
                  />
                  <p className="castText">{original_name}</p>
                  <p className="castTextSecond">{character}</p>
                </li>
              ),
            )}
          </ul>
        ) : (
          <h3>Page not found</h3>
        )}
        {isLoading && <AppLoader />}
      </CastStyled>
    );
  }
}

export default Cast;
