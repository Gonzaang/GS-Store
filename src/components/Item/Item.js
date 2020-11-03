import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Item (props) {
  return ( 
  <>
    <Card style={{ width: '14rem' }}>
    <Card.Img variant="top" src={props.pictureUrl}/>
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.price}</Card.Text>
    <Button variant="primary">Agregar</Button>
    </Card.Body>
    </Card>
   </>
  )
};
    
