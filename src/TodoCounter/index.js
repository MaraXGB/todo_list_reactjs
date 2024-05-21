import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';
// const styles={
//   fontSize: '24px',
//   textAlign: 'center',
//   margin: '0',
//   padding: '48px'
// };
function TodoCounter(){
  const {totalTodos,
    completedTodos} = React.useContext(TodoContext);
    return(
      /****ELEMENTOS */ 
      totalTodos == completedTodos ?
        <h2>Felicidades!! has completado todos tus TODOs</h2>
        :
        <h2>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h2>
    );
  }

export { TodoCounter };