import React from 'react';
import './TodoSearch.css';
function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

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