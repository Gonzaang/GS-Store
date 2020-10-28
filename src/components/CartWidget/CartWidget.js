import React from 'react';
import Col from 'react-bootstrap/Col'
import {BiCart} from 'react-icons/bi'
import ItemCount from '../ItemCount/ItemCount';

let stock = 10

const handleAdd = (counter)=>{

  return ()=>{

    if(stock <= 0){
      alert('no hay stock')
    }else{
      alert(`se van a agregar ${counter} items`)
    }

  }
  
}


class CartWidget extends React.Component {
    
    render() {
        return (<>
                <Col xs={6} md={4}>
                    <BiCart size="4em" />
                    <ItemCount onAdd={handleAdd} stock={stock} inicial={3} />
                </Col>
            </>
                
        )
    }
}
export default CartWidget;