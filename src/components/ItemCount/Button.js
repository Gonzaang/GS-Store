import React from 'react';

const style ={
    width:40,
    heigth:40,
    margin: '10px 55px',
    cursor: 'pointer',
    
}

export default function Button({suma, onClick, counter, }) {

    let signo = suma ? '+' : '-';

    let amount = suma ? (counter +1) : (counter -1);




    return(<button onClick = {onClick(amount)} {...{style}}> {signo} </button>)
}