import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';
function CreateTodoButton() {
  const {
    toggleModal} = React.useContext(TodoContext);
  return (
    <button className='create-todo-button' onClick={toggleModal}>+</button>
  )
}

export {CreateTodoButton}