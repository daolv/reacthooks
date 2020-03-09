import React from 'react';
import logo from './logo.svg';
import TodoListClassComponent from './TodoListClassComponent';
import TodoListFunctionComponent from './TodoListFunctionComponent';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <TodoListClassComponent/> */}
     <TodoListFunctionComponent/>
    </div>
  );
}

export default App;
