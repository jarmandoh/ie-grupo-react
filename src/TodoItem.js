import React from "react";
import './TodoItem.css';

function TodoItem (props) {
    return(
        <li className="TodoItem">
            <span>C</span>
            <p>{props.text}</p>
            <span>x</span>
        </li>
    )
}
export { TodoItem };