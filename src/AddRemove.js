import React from 'react'
import { useState} from 'react';

export default function AddRemove() {
 
    let broj = 0;

    const [addItem,setaddItem] =useState(broj);

    function Add(){
        setaddItem(addItem+1)
    }
    function Remove(){
      if(addItem >0)
        setaddItem(addItem-1)

    }



  return (
    <div className='samelineadd'>

        <button className='addbtn' onClick={Add}>Add item</button> <p className='info'>  Items in cart: {addItem}  </p> <button className='addbtn' onClick={Remove}>Remove item</button>
      
    </div>
  )
}
