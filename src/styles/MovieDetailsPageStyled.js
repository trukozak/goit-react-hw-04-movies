import styled from 'styled-components';

export const MovieDetailsStyled = styled.div`
  font-size: 24px;
  line-height: 1.5;
  margin-top: 10px;

  .infoLink {
    font-size: 24px;
    margin-right: 20px;
    color: #1f1f20;
    text-decoration: underline;
  }
  .infoLinkActive {
    color: #cf9d9d;
  }

  .infoBox {
    display: block;
    margin-top: 30px;
  }
  .backBtn {
    margin-bottom: 10px;
    font-size: 18px;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    background-color: #989494;
    color: #0b0b0c;
    border-radius: 6px;
    &:hover {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 2px 4px -1px rgba(0, 0, 0, 0.5);
    }
  }
`;
