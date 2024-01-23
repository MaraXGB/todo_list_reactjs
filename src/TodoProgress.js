import React from 'react';
import './TodoProgress.css';
// function ProgressLoad(skill, porcent,sValue){
//     let androidBar = document.querySelector('.android');
//     let androidPorcent = androidBar.getAttribute('data-value');
// let androidValue = androidBar.firstElementChild;
// ProgressLoad(androidBar,androidPorcent,androidValue);
//     let progressStartValue = 0;
//     let speed = 10;
//     let progressEndValue = porcent;
//     let progress = setInterval(() =>{
//       progressStartValue++;
//       sValue.textContent = progressStartValue+'%';
//       skill.style.background = "conic-gradient(var(--main-gray)"+ progressStartValue*3.6 +"deg, var(--soft-gray) 0deg)";
//       if(progressStartValue==progressEndValue){
//         clearInterval(progress);
//         porcent.textContent = porcent;
//       }
  
//     },speed);
//   } 
function TodoProgress(props){
    return(
      /****ELEMENTOS */
      <div className="todo-progress">
        <h3>Progreso</h3>
        <div className="progress-chart" data-value={props.progress}>
        <span>{props.progress}%</span>
        </div>
      </div>
    );
  }
  export {TodoProgress };