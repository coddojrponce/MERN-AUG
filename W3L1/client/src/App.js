import {useState} from 'react'
import './App.css';

import Form from './components/Form'
import List from './components/List'
import Todo from './components/Todo'

function App() {

  const [todoList,setTodoList]= useState([])


  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList} />
      <List todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
