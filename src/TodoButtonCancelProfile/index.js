import React from 'react';
import './TodoButtonCancel.css';
import { TodoContext } from '../TodoContext';

function TodoButtonCancelProfile(){
    const {
        setIsClosed
    } = React.useContext(TodoContext);
    const onCancel = (event) => {
        event.preventDefault();
        setIsClosed(false);
      };
    return (
        <button className='button-cancel' onClick={onCancel}>Cancelar</button>
    );
}
export { TodoButtonCancelProfile };