import React from 'react'

function Todo(props) {

    return (
        <li>
            <p className="items">{props.item}</p>
            <div className="buttons">
                <button onClick={props.handleDelete} value={props.item}>delete</button>
                <button value={props.item} onClick={props.handleComplete}>complete</button>
            </div>
        </li>
    )
}

export default Todo;

