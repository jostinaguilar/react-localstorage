import { TaskRow } from './TaskRow';

export function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  function taskTableRows(doneValue) {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  }
  return (
    <table className="table table-dark table-striped table-bordered">
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}
