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
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [errorInput, setErrorInput] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue != ""){
      setErrorInput(""); 
      addTodo(newTodoValue);
      setNewTodoValue("");
    } 
    else{
      setErrorInput("border-red"); 
    }
    if(!window.matchMedia("(min-width: 700px)").matches) setOpenModal(true);
  };
  
  const onChange = (event) => {
    event.preventDefault();
    setNewTodoValue(event.target.value);
  };
  return (
    <form className='modal-task' onSubmit= {onSubmit}>
      <h1 className='task-title'>Nueva Tarea</h1>
      <label className='task-label' >Tarea</label>
      <textarea className={`task-input ${errorInput}`} placeholder='Escribe una nueva tarea' value={newTodoValue} onChange={onChange} onKeyDown={(e) => {
        if (e.key === "Enter")
            onSubmit(e);
        }}/>
      {/* <div className='button-container'> */}
      <TodoButtonCancel/>
      <TodoButtonAdd/>
      {/* </div> */}
    </form>
  );
}

export {CreateTaskModal};