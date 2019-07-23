import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header' />
      <TodoList />
    </div>
  );
}

export default App;
