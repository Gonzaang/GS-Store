import React, {useState} from 'react';
import Add from './Add';
import Button from './Button';
import Display from './Display';

const style ={
    width:150,
    heigth:150,
    backgroundColor:'black',
    textAling:'center',
}





export default function ItemCount({ onAdd, stock, inicial}){

    let [counter, setCounter] = useState(inicial);

    const hacerClick =(amount)=>{
        return(
            ()=>{
                let total = (amount < 0) ? 0: amount;
                let limiter = (total > stock) ? stock : total;
                setCounter(limiter);
            }
        )
    };

    return(
        <div className="ItemCount" {...{style}}>
            <div className="upper">
                <Button suma ={false} onClick ={hacerClick} {...{counter}} />
                <Display value= {counter} /> 
                <Button suma={true} onClick ={hacerClick} {...{counter}} />
            </div>
            <div className="Lower">
                <Add onAdd = {onAdd} {...{counter}} />
            </div>
        </div>
    )
}

