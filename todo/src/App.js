// import logo from './logo.svg';
import {useState} from 'react';
import React from 'react';
import './App.css';
import Todo from './Components/Todo';

function App() {

  const [todos, setTodos] = useState(["Walk the dog","Work on capstone assignment","eat lunch with friends","go to bed"]);
  const [inputVal, setInputVal] = useState('');
  const [todosD, setTodosD] = useState(todos);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  }
  const handleSubmit = (e) => {
    setTodos([...todos, e.target.value]);
    console.log(e.target.value);
  }
  const handleDelete = (e) => {
    let indexV = todos.indexOf(e.target.value);
    setTodosD(todos.splice(indexV, 1));
  }
  const handleComplete = (e) => {
    let todoValue = e.target.value;
    todoValue += ' COMPLETE';
    let indexOfTodos = todos.indexOf(e.target.value);
    setTodosD(todos.splice(indexOfTodos, 1, todoValue));
  } 
  const handleDeleteAll = (e) => {
    setTodos([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="list">
         <br/>
          <h1>Todo List</h1>
          {
          todos.map((t,i) => 
          <ul>
            <Todo key={i} item={t} handleDelete={handleDelete} todos={todos} i={i} handleComplete={handleComplete}/>
          </ul>)
          }
          <input type="text" onChange={handleChange} value={inputVal} placeholder="Enter a task"/>
          <button onClick={handleSubmit} value={inputVal}>Add</button>
          <button onClick={handleDeleteAll}>Delete All</button>
        </div>
      </header>
    </div>
  );
}

export default App;