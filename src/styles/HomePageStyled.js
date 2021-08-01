import styled from 'styled-components';

export const HomePageStyled = styled.div`
  text-align: center;
  .homeMoviesTitle {
    margin-bottom: 30px;
    color: #e62987;
    font-weight: bold;
    font-size: 58px;
  }
  .homeMoviesList {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .homeMoviesItem {
    list-style: none;
    border-radius: 6px;
    background-color: #ece7e9;
    box-shadow: 0 0 10px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.04);
    }
  }
  .homeMoviesImg {
    width: 100%;
    object-fit: cover;
  }
  .homeMoviesLink {
    font-size: 20px;
    text-decoration: none;
    color: black;
  }
  .moviesTitle {
    padding: 20px 5px;
  }
`;
