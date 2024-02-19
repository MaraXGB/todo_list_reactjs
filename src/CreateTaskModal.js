import React from 'react';
import './CreateTaskModal.css';
import './TodoButtonCancel.js';
import { TodoButtonAdd } from './TodoButtonAdd.js';
import { TodoButtonCancel } from './TodoButtonCancel.js';
function CreateTaskModal() {
  return (
    <div className='modal-task hidde'>
      <h1 className='task-title'>Nueva Tarea</h1>
      <label className='task-label'>Tarea</label>
      <input className='task-input' placeholder='Escribe una nueva tarea' />
      <TodoButtonAdd/>
      <TodoButtonCancel/>
    </div>
  );
}

export {CreateTaskModal};