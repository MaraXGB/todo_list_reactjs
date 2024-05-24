import React from 'react';
import './EmptyTodos.css';
function EmptyTodos() 
{
return (
    <div className='todo-empty'>
      <img src={require('./empty_todo.jpg')}/>
      <p>No tienes tareas asignadas! </p>
      <p>Crea tu primera tarea</p>
    </div>
  );
}

export {EmptyTodos};