import { useState } from 'react/cjs/react.development';
import './App.scss';
import Aside from './components/Aside/Aside';
import Folder from './components/Folder/Folder';

function App() {
  const [folders, setFolders] = useState([]);

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
        </div>
      </div>
    </div>
  );
}

export default App;
