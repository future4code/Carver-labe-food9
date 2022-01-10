import React from 'react';
import Router from "./router/Router"
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
`

const App = () => {
  return (
    <div >
    <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
