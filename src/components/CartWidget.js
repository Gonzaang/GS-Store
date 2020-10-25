import React from 'react';
import Cart from '../components/carro.png'
import Col from 'react-bootstrap/Col'

class CartWidget extends React.Component {
    render() {
        return (<>
                <Col xs={6} md={4}>
                     <img alt="cart" style={{height: '80px', marginTop: '10px'}} src={Cart} rounded />
                </Col>
            </>
                
        )
    }
}
export default CartWidget;