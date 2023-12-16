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
      <div className='todo-counter-header'>
        <img src='https://nexdevus.com/assets/imgs/logo_white.png'/>
        <h1>Hola, Mara</h1>
        <h2>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h2>
      </div>
    );
  }

export { TodoCounter };