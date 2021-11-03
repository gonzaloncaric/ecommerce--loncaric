import React from 'react';
import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
//import { useMediaQuery } from 'react-responsive'

//Components
import NavBar from './components/navBar/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
