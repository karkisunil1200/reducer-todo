import React, {useReducer} from 'react';
import {initialState, reducer, ADD_TASK, TOOGLE, CLEAR} from '../reducers/reducers';
import TodoForm from '../TodoForm/TodoForm';
import List from '../List/List';

function TodoList(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = task => {
    console.log(task);
    dispatch({type: ADD_TASK, payload: task});
  };
  const toggle = id => {
    dispatch({type: TOOGLE, payload: id});
  };

  const clearCompleted = () => {
    dispatch({type: CLEAR});
  };
  return (
    <div>
      {state.items.map(item => {
        return <List key={item.id} toggle={toggle} list={item} />;
      })}
      <TodoForm add={addTodo} />
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoList;
