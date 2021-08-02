import React, { Component } from 'react';
import { AppLoader } from '../components/Loader/Loader';
import { fetchSearchMoviesReviews } from '../services/api';
import { ReviewsStyled } from '../styles/ReviewsStyled';

class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  async componentDidMount() {
    const id = this.props.match.params.id || '';
    try {
      this.setState({ isLoading: true });
      const res = await fetchSearchMoviesReviews(id);
      this.setState({ reviews: res, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { reviews, isLoading } = this.state;
    return (
      <ReviewsStyled>
        {!!reviews.length ? (
          <ul>
            {reviews.map(({ author, content }) => (
              <li className="reviewItem" key={author}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews!</h3>
        )}
        {isLoading && <AppLoader />}
      </ReviewsStyled>
    );
  }
}

export default Reviews;
