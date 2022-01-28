import { useState } from 'react/cjs/react.development';
import './Folder.scss';
import TasksForm from '../TasksForm/TasksForm';
import TasksList from '../TasksList/TasksList';
import addTask from '../../assets/images/add-task.svg';

function Folder({ folder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    text: '',
    completed: false,
  });

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function completeTask(id) {
    setTasks(
      tasks.map((t) => {
        return t.id === id ? { ...task, completed: true } : { ...task };
      })
    );
  }

  function deleteTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }
  return (
    <>
      <h2 className='heading' style={{ color: folder.color }}>
        {folder.name}
      </h2>
      <TasksList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}></TasksList>
      <div
        className={`app__add-task ${isOpen ? 'app__add-task--hidden' : ''}`}
        onClick={() => setIsOpen(true)}>
        <img src={addTask} alt='' />
        <p>Новая задача</p>
      </div>
      <TasksForm
        task={task}
        setTask={setTask}
        createTask={createTask}
        isOpen={isOpen}
        setIsOpen={setIsOpen}></TasksForm>
    </>
  );
}

export default Folder;
