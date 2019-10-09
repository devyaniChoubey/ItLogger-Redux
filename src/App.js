import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogBtn from './components/logs/AddLogModel';

const App = () => {
  useEffect(() => {
    //Initialise materialise js
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar />
      <div class="container">
        <Logs />
        <AddLogBtn />
        <AddBtn />
      </div>
    </Fragment>
  );
}

export default App;
