import React from 'react';
import './List.css';

function List(props) {
  return (
    <div>
      <p
        className={props.list.completed && 'completed'}
        onClick={() => {
          props.toggle(props.list.id);
        }}
      >
        {props.list.task}
      </p>
    </div>
  );
}

export default List;
