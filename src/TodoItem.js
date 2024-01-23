import React from 'react';
import './TodoItem.css'
function TodoItem(props){
    return(
      /****ELEMENTOS */
      <li className="TodoItem">
        <span className={`Icon Icon-check material-icons ${props.completed && "Icon-check--active"} `}>done</span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Icon Icon-delete material-icons">delete_outline</span>
      </li>
    );
  }
  export {TodoItem };