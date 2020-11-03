import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import ItemList from './components/ItemList/ItemList';


function App() {
  

  return ( <>

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/">

        <ItemListContainer titulo="Encontrá aquí los mejores precios" />
         
        <Container>
  <Row md={4}>
    <Col><Item id="1" title="Ryzen 5" price="$17000" pictureUrl="./Images/cpu.jpg"  /></Col>
    <Col xs={6}><Item id="2" title="Ram 8GB" price="$5000" pictureUrl="../Images/ram.jpg"  /></Col>
    <Col><Item id="3" title="Rtx 3080" price="$99000" pictureUrl="../Images/gpu.jpg"  /></Col>
  </Row>
</Container>
        
            
        
        
        </Route>
        
       


      </Switch>  
    </BrowserRouter>
    
    </>
  );
}

export default App;


