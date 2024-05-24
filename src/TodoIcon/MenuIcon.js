import React from "react";
import { TodoIcon } from '.';

function MenuIcon({isClosed, toggleMenu}) {
    
    return(<TodoIcon
        type = {isClosed ? 'closed' : 'open'}
        color = {isClosed ? '#023A69' : 'gray'}
        onClick={toggleMenu}
    />);
}
export { MenuIcon };