import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogBtn from './components/logs/AddLogModel';
import EditLogBtn from './components/logs/EditLogModel';
import AddTechModel from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    //Initialise materialise js
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div class="container">
          <AddBtn />

          <AddLogBtn />
          <EditLogBtn />
          <AddTechModel />
          <TechListModal />
          <Logs />

        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
