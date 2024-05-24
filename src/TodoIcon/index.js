import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as MenuClosedSVG } from './menu_closed.svg';
import { ReactComponent as MenuOpenSVG } from './menu_open.svg';
import "./TodoIcon.css"
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";


const iconTypes = 
{"check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
 "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
 "closed": (color) => <MenuClosedSVG className="Icon-svg-menu" fill={color}/>,
 "open": (color) => <MenuOpenSVG className="Icon-svg-menu" fill={color}/>};

function TodoIcon({type, color, onClick }){
    return(<span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
        {iconTypes[type](color)}
    </span>);
}
export { TodoIcon };