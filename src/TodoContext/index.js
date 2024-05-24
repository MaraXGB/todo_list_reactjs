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
  const {item:user,
    saveItem: saveUser,
    loaging: load,
    error: err
    } = useLocalStorage('USUARIO',[]);

  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const[isClosed, setIsClosed] = React.useState(true);

  const [newNickname, setNewNickname] = React.useState("User1");

  const [colorProgress, setColorProgress] = React.useState(0);
 
  let completedTodos = todos.filter(todo => !!todo.completed).length;
  let totalTodos = todos.length;
  let nickname = user.nickname;
  let photo = user.photo; 
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
 const toggleModal = () => {
    const newModal = !openModal;
    setOpenModal(newModal);
 }
 const addTodo = (text) =>{
  const newTodos = [...todos];
  newTodos.push({text, completed: false,});
  saveTodos(newTodos);
 }
 const toggleMenu = ()=> {
   const newMenu = !isClosed;
    setIsClosed(newMenu);
}
const changeProfile = (text, photo) =>{
  const newUser =  {nickname: text, photo: photo};
  console.log(newUser);
  saveUser(newUser);
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
    openModal,
    setOpenModal,
    toggleModal,
    addTodo,
    isClosed,
    setIsClosed,
    toggleMenu,
    changeProfile,
    nickname,
    photo,
    load, 
    err,
    newNickname,
    setNewNickname,
    colorProgress,
  }}>
    {children}
  </TodoContext.Provider>);
}
//Exportar contexto y el provider personalizado
export{TodoContext, TodoProvider}