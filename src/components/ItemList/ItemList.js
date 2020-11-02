import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export default function ItemList ({ items }) {
    return items.map( item => <Card style={{ width: '12rem' }}>
    <Card.Img variant="top" src="./Images/cpu.jpg" />
    <Card.Body> 
      <Card.Title>Ryzen 5 1600 AF</Card.Title>
      <Card.Text>
        Microprocesador AMD Ryzen
      </Card.Text>
      <Button variant="primary">COMPRAR</Button>  
    </Card.Body>
  </Card>)
};