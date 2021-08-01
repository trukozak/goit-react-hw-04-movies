import styled from 'styled-components';
export const NavigationStyled = styled.nav`
  .navigationList {
    display: flex;
    list-style: none;
  }
  .navigationItem:not(:last-child) {
    margin-right: 30px;
  }
  .navigationLink {
    font-size: 20px;
    font-weight: bold;
    color: #2e2c2c;
    text-transform: uppercase;
    text-decoration: none;
  }
  .navigationLinkActive {
    text-decoration: underline;
    color: #e0b2b2;
  }
`;
