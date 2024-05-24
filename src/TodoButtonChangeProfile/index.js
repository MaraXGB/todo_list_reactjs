import React from 'react';
import './TodoButtonChange.css';
import { TodoContext } from '../TodoContext';

function TodoButtonChangeProfile(){
    
    return (
        <button className='button-change' onClick={()=>{
            //console.log("le diste click");
            
        }}>Actualizar</button>
    );
}
export { TodoButtonChangeProfile };