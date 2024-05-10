import React from 'react';
import { useLocalStorage } from './useLocalStorage';
//Creacion del contexto
const TodoContext = React.createContext();
//Crear provider personalizado
function TodoProvider({children}){
    const {item:todos,
        saveItem: saveTodos,
        loading,
        error
       } = useLocalStorage('TODOS_V1',[]);
 const [searchValue, setSearchValue] = React.useState("");
 const [colorProgress, setColorProgress] = React.useState(0);
// const [searchedTodos, set]
 let completedTodos = todos.filter(todo => !!todo.completed).length;
 let totalTodos = todos.length;
 console.log(totalTodos);

 // console.log('Log 1');
 // //Se ejecutara al final y solo cuando totalTodos cambie su valor
 // React.useEffect(() => {
 //   console.log('Log 2');
 // },[totalTodos]);
 // console.log('Log 3');
 const searchedTodos = todos.filter(
   (todo) => {
     const todoText = todo.text.toLowerCase();
     const searchText = searchValue.toLocaleLowerCase();  
     return todoText.includes(searchText);
   }
 );
 
 const completeTodo = (text) =>{
   
   const newTodos = [...todos];
   const todoIndex = newTodos.findIndex(
     (todo) => todo.text === text 
   );
   newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
   saveTodos(newTodos);
  
 };
 const deleteTodo = (text) =>{
   const newTodos = [...todos];
   const todoIndex = newTodos.findIndex(
     (todo) => todo.text === text 
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
  return(<TodoContext.Provider value={
    {loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    colorProgress,
  }}>
    {children}
  </TodoContext.Provider>);
}
//Exportar contexto y el provider personalizado
export{TodoContext, TodoProvider}