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
    <Item id="1" title="Ryzen 5" price="$17000" pictureUrl="../Images/cpu.jpg"  />
    <Item id="2" title="Ram 8GB" price="$5000" pictureUrl="../Images/ram.jpg"  />
    <Item id="3" title="Rtx 3080" price="$99000" pictureUrl="../Images/gpu.jpg"  />    
    
    
    </>
  );
}

export default App;
