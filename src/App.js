import React from 'react';
import Router from "./router/Router"
import {createGlobalStyle} from 'styled-components'
import GlobalState from './context/GlobalState';

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
`

const App = () => {
  return (
    <GlobalState >
    <GlobalStyle/>
      <Router/>
    </GlobalState>
  );
}

export default App;
