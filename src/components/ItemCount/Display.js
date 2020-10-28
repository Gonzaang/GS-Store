import React from 'react';

const style ={
    width:150,
    heigth:150,
    backgroundColor:'grey',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',

}

export default function Display ({ value }){

    return(
        <div className="display" {...{style}}> {value} </div>
    )

}