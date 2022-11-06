import { useState } from 'react';

export function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName('');
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-4 py-4">
      <input
        type="text"
        placeholder="Enter a New Task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="form-control w-10"
      />
      <button type="submit" className="btn btn-primary">
        Save Task
      </button>
    </form>
  );
}
