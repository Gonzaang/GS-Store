import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ItemTask = new Promise ((res) => {
    setTimeout (() => {
        res ([{ id :1, title:'Memoria Ram 8 Gb', price:6000, pictureUrl:"./Images/ram.jpg"},
              {id :2, title:'Ryzen 5 1600 AF', price:12000, pictureUrl:"./Images/cpu.jpg"},
              {id :3, title:'Nvidia GTX 3080', price:95000, pictureUrl:"./Images/gpu.jpg"}]);
    }, 2000);
});



class ItemListContainer extends React.Component {
    render(){

           return(
            <>
            <h1>GS STORE {this.props.titulo}</h1>
            
            
            </>

        )
    }
}

export default ItemListContainer;