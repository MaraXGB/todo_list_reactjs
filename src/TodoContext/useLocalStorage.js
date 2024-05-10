import React from "react";
function useLocalStorage(itemKey, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect(()=>{
      setTimeout(() =>{
        try{
          let localStorageItem = localStorage.getItem(itemKey); 
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemKey, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }
          else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
        }
        catch(error){
          setLoading(false);
          setError(true);
        }
      },2000);
    },[]);
    
    
    const saveItem = (newItem) => {
      //completedTodos = newItem.filter(todo => !!todo.completed).length;
      //totalTodos = newItem.length;
      //const newColorProgress = (completedTodos/totalTodos)*100;
      localStorage.setItem(itemKey,JSON.stringify(newItem));
      
      //setColorProgress(newColorProgress);
      setItem(newItem);
    };
    return {
      item,
      saveItem,
      loading,
      error
    };
  }
  export {useLocalStorage};
  // const defaultArr = [{text: 'Limpiar cocina', completed:true},{text:'Limpiar cuarto', completed: false}, {text:'Limpiar Baño', completed:false}];
//  localStorage.setItem('TODOS_V1',JSON.stringify(defaultArr));
// localStorage.removeItem('TODOS_V1');