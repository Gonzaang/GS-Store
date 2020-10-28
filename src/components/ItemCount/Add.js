import React from 'react';

let style = {
    width:100,
    height:40,
    textAlign: 'center',
    cursor: 'pointer',
    marginLeft: 20,

}

export default function Add({onAdd, counter} ){
    return(
        <button {...{style}} onClick = {onAdd(counter)}>Agregar</button>
    )
}