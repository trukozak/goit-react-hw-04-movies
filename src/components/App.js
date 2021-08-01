import React, { Component } from 'react';
import { AppStyled } from '../styles/AppStyled';
import Header from './Header/Header';
import Main from './Main/Main';

class App extends Component {
  state = {};
  render() {
    return (
      <AppStyled>
        <Header />
        <Main />
      </AppStyled>
    );
  }
}

export default App;
