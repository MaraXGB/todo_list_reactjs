import React from "react";
import { MenuIcon } from "../TodoIcon/MenuIcon";

function TodoButtonProfile({isClosed, toggleMenu}) {

 return(<MenuIcon
    isClosed={isClosed} 
    toggleMenu={toggleMenu}
/>);
}
export {TodoButtonProfile}