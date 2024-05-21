import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';
function TodoSearch() 
{
  const {searchValue,
    setSearchValue,} = React.useContext(TodoContext);
  return (
    <div className='todo-search'>
      <span className='search-icon material-icons'>search</span>
      <input className='TodoSearch' placeholder='Lavar Ropa' value = {searchValue} onChange={(event) =>{
        setSearchValue(event.target.value);
      }} />
      
    </div>
  );
}

export {TodoSearch};