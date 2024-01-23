import React from 'react'
import './TodoCounter.css'
// const styles={
//   fontSize: '24px',
//   textAlign: 'center',
//   margin: '0',
//   padding: '48px'
// };
function TodoCounter({ total, completed }){
    return(
      /****ELEMENTOS */ 
        <h2>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h2>
    );
  }

export { TodoCounter };