import React, {useState} from 'react';

function TodoForm(props) {
  const [task, setTask] = useState('');

  const handleChange = event => {
    setTask(([event.target.name] = event.target.value));
  };

  const addTask = event => {
    event.preventDefault();
    props.add(task);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <label>Add a task: </label>
        <input name='task' onChange={handleChange} value={task} />
        <button>Add task</button>
      </form>
    </div>
  );
}

export default TodoForm;
