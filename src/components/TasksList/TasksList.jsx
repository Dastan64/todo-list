import TaskItem from '../TaskItem/TaskItem';

function TasksList({ tasks, deleteTask, completeTask }) {
  const tasksList =
    tasks.length > 0 &&
    tasks.map((task) => (
      <TaskItem
        task={task}
        completeTask={completeTask}
        key={task.id}
        deleteTask={deleteTask}></TaskItem>
    ));
  return (
    <>{tasksList.length > 0 && <div className='app__tasks'>{tasksList}</div>}</>
  );
}

export default TasksList;
