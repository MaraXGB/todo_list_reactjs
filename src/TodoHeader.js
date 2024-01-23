import react from "react";
import './TodoHeader.css';
import './TodoCounter.js';
import { TodoCounter } from "./TodoCounter.js";
function TodoHeader(props){
    return(
      /****ELEMENTOS */
      <div className="todo-header">
        <div className="todo-header--container">
         <img src='https://nexdevus.com/assets/icons/logo_icono.png'/>
          <h1>Hola, <span>{props.name}!</span> </h1>
          <TodoCounter total={props.total} completed={props.completed}/>
          </div>
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
            <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120" stroke-linecap="round"/>
        </svg>
      </div>
    );
  }
  export {TodoHeader };