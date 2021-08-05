import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log('🚀 ~ error', error);
  }
};

export const fetchSearchMovies = async query => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&api_key=${API_KEY}`,
    );
    return response.data.results;
  } catch (error) {
    console.log('🚀 ~ error', error);
  }
};

export const fetchSearchMoviesDetails = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log('🚀 ~ error', error);
  }
};

export const fetchSearchMoviesCredits = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.log('🚀 ~ error', error);
  }
};

export const fetchSearchMoviesReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
    return response.data.results;
  } catch (error) {
    console.log('🚀 ~ error', error);
  }
};
