// import logo from './logo.svg';
import {useState} from 'react';
import React from 'react';
import './App.css';
import Todo from './Components/Todo';

function App() {

  const [todos, setTodos] = useState(["eat","sleep","code","pray","repeat"]);  //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!
  const [inputVal, setInputVal] = useState('');
  const [completeVal, setCompleteVal] = useState('incomplete');
  const [todosD, setTodosD] = useState(todos);


  const handleChange = (e) => {
    setInputVal(e.target.value);
  }
  const handleSubmit = (e) => {
    setTodos([...todos, e.target.value]);
    console.log(todos);
  }
  const handleDelete = (e) => {
    console.log(e.target.value);
    let indexV = todos.indexOf(e.target.value);
    console.log(indexV);
    setTodosD(todos.splice(indexV, 1));
  }
  const handleComplete = (e) => {
    console.log(e.target.value);
    console.log(e.target);
    if (completeVal === 'incomplete'){
      setCompleteVal('complete');
    } else {
      setCompleteVal('incomplete');
    }
    console.log(completeVal);

  } 

  return (
    <div className="App">
      <header className="App-header">
        <div className="list">
         <br/>
          <p>Todo List</p>
          {
          todos.map((t,i) => 
          <ul id="val" className={completeVal}><Todo key={i} item={t} handleDelete={handleDelete} todos={todos} i={i} handleComplete={handleComplete}/>
            {/* <button onClick={handleDelete} value={todos}>delete</button>
            <button value={i} onClick={handleComplete}>complete</button> */}
          </ul>)
          }
          <input type="text" onChange={handleChange} value={inputVal} placeholder="Enter a task"/>
          <button onClick={handleSubmit} value={inputVal}>Add</button>
        </div>
      </header>
    </div>
  );
}

export default App;