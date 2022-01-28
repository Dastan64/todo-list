import { useState } from 'react/cjs/react.development';
import './App.scss';
import addTask from './assets/images/add-task.svg';
import Aside from './components/Aside/Aside';
import TasksForm from './components/TasksForm/TasksForm';
import Folder from './components/Folder/Folder';
import TasksList from './components/TasksList/TasksList';

function App() {
  const [title, setTitle] = useState('');
  const [folders, setFolders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__left'>
          <Aside folders={folders} setFolders={setFolders}></Aside>
        </div>
        <div className='app__right'>
          {folders.length > 0 ? (
            folders.map((folder) => <Folder folder={folder} key={folder.id} />)
          ) : (
            <h2 style={{ color: '#cdd1d3' }}>Задачи отсутствуют</h2>
          )}
          {/* <TasksList tasks={tasks} deleteTask={deleteTask}></TasksList>
          <div
            className={`app__add-task ${isOpen ? 'app__add-task--hidden' : ''}`}
            onClick={() => setIsOpen(true)}>
            <img src={addTask} alt='' />
            <p>Новая задача</p>
          </div>
          <TasksForm
            createTask={createTask}
            isOpen={isOpen}
            setIsOpen={setIsOpen}></TasksForm> */}
        </div>
      </div>
    </div>
  );
}

export default App;
