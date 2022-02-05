import { Route, Routes } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './App.scss';
import AllFolders from './components/AllFolders.jsx/AllFolders';
import Aside from './components/Aside/Aside';
import Folder from './components/Folder/Folder';

function App() {
  const [folders, setFolders] = useState([]);

  const routes = folders.map((item) => (
    <Route
      path={'/' + item.id}
      key={item.id}
      element={<Folder key={item.id} id={item.id} folder={item} />}
    />
  ));

  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__left'>
          <Aside folders={folders} setFolders={setFolders}></Aside>
        </div>
        <div className='app__right'>
          <Routes>
            <Route path='/' element={<AllFolders folders={folders} />} />
            {routes}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
