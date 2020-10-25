import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return ( <>
    <NavBar />

    <ItemListContainer titulo="Encontrá aquí los mejores precios" />
    
    
    </>
  );
}

export default App;
