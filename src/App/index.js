import React from 'react';
import { AppUI } from "./AppUI"
import { TodoProvider } from '../TodoContext';

function App() {
 
  return(
    //Encapsular contexto
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
