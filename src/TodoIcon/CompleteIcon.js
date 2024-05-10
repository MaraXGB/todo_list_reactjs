import React from "react";
import { TodoIcon } from '.';

function CompleteIcon({completed, onComplete}) {
    return(<TodoIcon
        type = "check"
        color = {completed ? '#8cde8f' : 'gray'}
        onClick={onComplete}
    />);
}
export { CompleteIcon };