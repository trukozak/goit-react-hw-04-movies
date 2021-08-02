import styled from 'styled-components';

export const CastStyled = styled.div`
  .castList {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 10px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  .castItem {
    padding: 10px;
    text-align: center;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.03);
    }
  }
  .castImg {
    width: 100%;
    object-fit: cover;
  }
  .castText {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
  }
  .castTextSecond {
    font-size: 18px;
  }
`;
