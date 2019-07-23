import React from 'react';
import {initialState} from '../reducers/reducers';

function TodoList(props) {
  return (
    <div>
      {initialState.items.map(item => {
        return item.task;
      })}
    </div>
  );
}

export default TodoList;
