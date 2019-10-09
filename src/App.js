import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
const App = () => {
  useEffect(() => {
    //Initialise materialise js
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar />
      <Logs />
    </Fragment>
  );
}

export default App;
