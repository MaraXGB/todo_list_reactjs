import React from 'react';
import './EmptyTodos.css';
function EmptyTodos() 
{
return (
    <div className='todo-search'>
      <span className='search-icon material-icons'>search</span>
      <input className='TodoSearch' placeholder='Lavar Ropa' />
      
    </div>
  );
}

export {EmptyTodos};