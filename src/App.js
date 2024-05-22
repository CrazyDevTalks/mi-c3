import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PeopleList from './components/PeopleList';
import VehicleList from './components/VehicleList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PeopleList />
        <VehicleList />
      </div>
    </Provider>
  );
}

export default App;