import React from 'react';
import { TodoHeader } from './TodoHeader';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoProgress } from './TodoProgress';
import { CreateTaskModal } from './CreateTaskModal';

const defaultArr = [{text: 'Limpiar cocina', completed:false},{text:'Limpiar cuarto', completed: true}, {text:'Limpiar Baño', completed:true}];

function App() {
  return (
  
    <React.Fragment>
      <TodoHeader name={"Mara"} total={25} completed={16}/>
      <TodoSearch/>
      <TodoList>
        {defaultArr.map(todo => (
           <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          ))}
      </TodoList>
      <CreateTodoButton/>
      <CreateTaskModal/>
     {/* Esto es un comentario */}
     <TodoProgress progress={70}/>
    </React.Fragment>
  );
}

export default App;
