import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoProgress } from '../TodoProgress';
import { CreateTaskModal } from '../CreateTaskModal';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { setInterval } from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';


function AppUI(){
    const {
      loading,
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
      colorProgress,} = React.useContext(TodoContext);
    return (
  
        <React.Fragment>
          <TodoHeader nickname={"Mara"} total={totalTodos} completed={completedTodos}/>
          <TodoSearch
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
          />
          {/* Encapsular el componente que requiere las propiedades que estan en el contexto */}
          <TodoContext.Consumer>
            {({loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo}) => (
                <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
  
  
                {searchedTodos.map(todo => (
                  <TodoItem key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed} 
                  onComplete={() =>completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}/>
                  ))}
              </TodoList>
            )}
          </TodoContext.Consumer>
          <CreateTodoButton/>
          {openModal && (
              <Modal>
                <CreateTaskModal/>
              </Modal>
            )}
         {/* Esto es un comentario */}
         {/* <TodoProgress progress={colorProgress}/> */}
        </React.Fragment>
      );
}
export{AppUI};