import React from 'react';
import './TodoButtonCancel.css';
import { TodoContext } from '../TodoContext';

function TodoButtonCancel(){
    const {
        setOpenModal
    } = React.useContext(TodoContext);
    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
      };
    return (
        <button className='button-cancel' onClick={onCancel}>Cancelar</button>
    );
}
export { TodoButtonCancel };