import React from 'react'

function Todo(props) {

    return (
        <li>
            {props.item}
            <button onClick={props.handleDelete} value={props.item}>delete</button>
            <button value={props.i} onClick={props.handleComplete}>complete</button>
        </li>
    )
}

export default Todo;

