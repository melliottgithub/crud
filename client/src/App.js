import React, { useState } from 'react';

const initStateStr = '';
const initStateArr = [];
const initStateBool = false;

const App = () => {
  const [task, setTask] = useState(initStateStr);
  const [list, setList] = useState(initStateArr);
  const [editMode, setEditMode] = useState(initStateBool);

  const onChange = (e) => {
    const value = e.target.value;
    setTask(value);
  }

  const addTask = (e) => {
    e.preventDefault();
    if(!task.trim()) { return; }
    setList([...list, { id: Math.random(), task }]);

    setTask(initStateStr);
  }

  const delTask = delId => {
    const filteredArr = list.filter(({id}) => id !== delId);
    setList(filteredArr);
  }

  const onEdit = (task, id) => {
    const editedArr = list.map(() => {})
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD React</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <ul className="list-group">
            {list.map(({id, task}) => (
            <li key={id} className="list-group-item">
              <span className="lead">{task}</span>
              <button onClick={() => delTask(id)} className="btn btn-danger float-right">Delete</button>
              <button onClick={() => onEdit(task, id)} className="btn btn-warning float-right mr-1">Edit</button>
            </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form onSubmit={addTask}>
            <input value={task} onChange={onChange} placeholder="Enter task..." type="text" className="form-control mb-2"></input>
            <button type="submit" className="col-12 btn btn-dark">Add</button>
          </form>
        </div>
      </div>
    </div>
    );
};


export default App;

