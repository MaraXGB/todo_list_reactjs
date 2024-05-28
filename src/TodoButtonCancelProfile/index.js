import React from 'react';
import './TodoButtonCancelProfile.css';
import { TodoContext } from '../TodoContext';

function TodoButtonCancelProfile(){
    const {
        setIsClosed
    } = React.useContext(TodoContext);
    const onCancel = (event) => {
        event.preventDefault();
        setIsClosed(true);
      };
    return (
        <button className='button-cancel-profile' onClick={onCancel}>Cancelar</button>
    );
}
export { TodoButtonCancelProfile };