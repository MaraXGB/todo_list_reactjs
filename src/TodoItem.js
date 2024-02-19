import React from 'react';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem(props){
    return(
      /****ELEMENTOS */
      <li className="TodoItem">
        <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
        {/* <span className={`Icon Icon-check material-icons ${props.completed && "Icon-check--active"} `} onClick={props.onComplete}>done</span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon onDelete={props.onDelete} />
        {/* <span className="Icon Icon-delete material-icons" onClick={props.onDelete}>delete_outline</span> */}
      </li>
    );
  }
  export { TodoItem };