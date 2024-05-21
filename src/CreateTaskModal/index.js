import React from 'react';
import './CreateTaskModal.css';
import '../TodoButtonCancel';
import { TodoButtonAdd } from '../TodoButtonAdd';
import { TodoButtonCancel } from '../TodoButtonCancel';
function CreateTaskModal() {
  return (
    <div className='modal-task'>
      <h1 className='task-title'>Nueva Tarea</h1>
      <label className='task-label'>Tarea</label>
      <input className='task-input' placeholder='Escribe una nueva tarea' />
      <TodoButtonAdd/>
      <TodoButtonCancel/>
    </div>
  );
}

export {CreateTaskModal};