import React from 'react';
import './CreateTaskModal.css';
import '../TodoButtonCancel';
import { TodoButtonAdd } from '../TodoButtonAdd';
import { TodoButtonCancel } from '../TodoButtonCancel';
import { TodoContext } from '../TodoContext';
function CreateTaskModal() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onChange = (event) => {
    event.preventDefault();
    setNewTodoValue(event.target.value);
  };
  return (
    <form className='modal-task' onSubmit= {onSubmit}>
      <h1 className='task-title'>Nueva Tarea</h1>
      <label className='task-label'>Tarea</label>
      <textarea className='task-input' placeholder='Escribe una nueva tarea' value={newTodoValue} onChange={onChange}/>
      <TodoButtonCancel/>
      <TodoButtonAdd/>
    </form>
  );
}

export {CreateTaskModal};