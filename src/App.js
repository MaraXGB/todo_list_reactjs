import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultArr = [{text: 'Limpiar cocina', completed:false},{text:'Limpiar cuarto', completed: true}, {text:'Limpiar Baño', completed:true}];

function App() {
  return (
  
    <React.Fragment>
      <TodoCounter total={25} completed={16}/>
      <TodoSearch/>
      <TodoList>
        {defaultArr.map(todo => (
           <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          ))}
      </TodoList>
      <CreateTodoButton/>
     {/* Esto es un comentario */}
    </React.Fragment>
  );
}

export default App;
