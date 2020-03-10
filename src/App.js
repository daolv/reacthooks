import React from 'react';
import logo from './logo.svg';
import TodoListClassComponent from './TodoListClassComponent';
import TodoListFunctionComponent from './TodoListFunctionComponent';
import MyHook from './MyHook';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <TodoListClassComponent/> */}
     {/* <TodoListFunctionComponent/> */}
     <MyHook/>
    </div>
  );
}

export default App;
