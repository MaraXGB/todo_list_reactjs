import React from "react";
import  ReactDOM from 'react-dom';

function MenuProfile({ children }){
    return ReactDOM.createPortal(
        <div className="MenuProfile">
            { children }
        </div>,
        document.getElementById('menuProfile')
    );
}
export { MenuProfile };