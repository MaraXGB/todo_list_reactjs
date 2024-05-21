import React from 'react';
import './TodoButtonAdd.css';
import { TodoContext } from '../TodoContext';

function TodoButtonAdd(){
    
    return (
        <button className='button-add' onClick={()=>{
            console.log("le diste click");
            
        }}>Agregar</button>
    );
}
export { TodoButtonAdd };