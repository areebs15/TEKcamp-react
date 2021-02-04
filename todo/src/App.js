// import logo from './logo.svg';
import {useState} from 'react';
import React from 'react';
import logo from './tek_logo.png';
import './App.css';
import Todo from './Components/Todo';

function App() {

  const [todos, setTodos] = useState(["eat","sleep","code","pray","repeat"]);  //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!
  const [inputVal, setInputVal] = React.useState('');


  const handleChange = (e) => {
    setInputVal(e.target.value);
  }
  const handleSubmit = (e) => {setTodos(todos => [...todos, e.target.value])}

  const handleDelete = (e) => {
    console.log(e.target.value);
    //let newTodoArr = e.target.value.split(",");
    setTodos(todos => [...todos.splice(1,1), e.target.value]);
    console.log(todos);
    //newTodoArr.splice(1,1);
    //console.log(newTodoArr);
  }
   
    //console.log(e.target);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <br/>
          <p>Create a Todo List App</p>
          {
          todos.map((t,i) => <span><Todo key={i} item={t}/>
          <button onClick={handleDelete} value={todos}>delete</button></span>)
          }
          <input type="text" onChange={handleChange} value={inputVal} placeholder="Enter a task"/>
          <button onClick={handleSubmit} value={inputVal}>Add</button>
        </div>
      </header>
    </div>
  );
}

export default App;