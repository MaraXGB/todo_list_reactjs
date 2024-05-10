import React from 'react';
import './TodoProgress.css';

function TodoProgress(props){
  // document.getElementsByClassName("progress-chart").style.backgroundImage = "conic-gradient(rgb(18, 45, 142)"+ props.progress*3.6 +"deg, #e8eaea 0deg)";
    return(
      /****ELEMENTOS */
      <div className="todo-progress">
        <h3>Progreso</h3>
        <div className="progress-chart" style={{background: 'conic-gradient(rgb(18, 45, 142)'+ props.progress+'*3.6 deg, #e8eaea 0deg)'}}>
        <span>{Math.floor(props.progress)}%</span>
        </div>
      </div>
    );
  }
  export {TodoProgress };
