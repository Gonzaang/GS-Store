import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item'
import './App.css';
import ItemList from './components/ItemList/ItemList';

function App() {
  

  return ( <>
    <NavBar />
    <ItemListContainer titulo="Encontrá aquí los mejores precios" />
    <ItemList items= {[1]} />
    
    
    </>
  );
}

export default App;
