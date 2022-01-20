import { useState } from 'react/cjs/react.development';
import './App.scss';
import addTask from "./assets/images/add-task.svg";
import TasksForm from './components/TasksForm/TasksForm';
import TasksList from './components/TasksList/TasksList';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  return (
    <div className="app">
      <div className="app__right">
        <h1 className='app__heading'>Фронтенд</h1>
        <TasksList tasks={tasks} deleteTask={deleteTask}></TasksList>

        <div className={`app__add-task ${isOpen ? "app__add-task--hidden" : ""}`} onClick={() => setIsOpen(true)}>
          <img src={addTask} alt="" />
          <p>Новая задача</p>
        </div>
        <TasksForm createTask={createTask} isOpen={isOpen} setIsOpen={setIsOpen}></TasksForm>
      </div>
    </div>
  );
}

export default App;
