import React from 'react';
import { TodoHeader } from './TodoHeader';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoProgress } from './TodoProgress';
import { CreateTaskModal } from './CreateTaskModal';
import { setInterval } from 'react';

// const defaultArr = [{text: 'Limpiar cocina', completed:true},{text:'Limpiar cuarto', completed: false}, {text:'Limpiar Baño', completed:false}];
//  localStorage.setItem('TODOS_V1',JSON.stringify(defaultArr));
// localStorage.removeItem('TODOS_V1');

function App() {
  let localStorageTodos = localStorage.getItem('TODOS_V1'); 
  let parsedTodos;
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }
  else{
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const [colorProgress, setColorProgress] = React.useState(0);
 // const [searchedTodos, set]
  let completedTodos = todos.filter(todo => !!todo.completed).length;
  let totalTodos = todos.length;
  console.log(totalTodos);
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();  
      return todoText.includes(searchText);
    }
  );
  const saveTodos = (newTodos) => {
    completedTodos = newTodos.filter(todo => !!todo.completed).length;
    totalTodos = newTodos.length;
    const newColorProgress = (completedTodos/totalTodos)*100;
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
    
    setColorProgress(newColorProgress);
    setTodos(newTodos);
  };
  const completeTodo = (text) =>{
    
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text 
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
   
   
  };
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text 
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  // const progressChart = document.querySelector('.progress-chart');
 
  //   const progressEndValue = props.progress;
  // const progress = setInterval(() =>{
  //      //progressStartValue++;  
  //     //  document.getElementsByClassName("progress-chart").style.background = "conic-gradient(rgb(18, 45, 142)"+ progressStartValue*3.6 +"deg, #e8eaea 0deg)";
     
  //     //  if(progressStartValue==colorProgress){
  //     //    progressStartValue = 0;
  //     //  }
  //     return colorProgress/3.6;
  //    },[colorProgress]);
  return (
  
    <React.Fragment>
      <TodoHeader nickname={"Mara"} total={totalTodos} completed={completedTodos}/>
      <TodoSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
           <TodoItem key={todo.text} 
           text={todo.text} 
           completed={todo.completed} 
           onComplete={() =>completeTodo(todo.text)}
           onDelete={() => deleteTodo(todo.text)}/>
          ))}
      </TodoList>
      <CreateTodoButton/>
      <CreateTaskModal/>
     {/* Esto es un comentario */}
     <TodoProgress progress={colorProgress}/>
    </React.Fragment>
  );
}

export default App;
