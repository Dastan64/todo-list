import { useState } from 'react/cjs/react.development';
import { v4 as uuidv4 } from 'uuid';
import './Aside.scss';

import FolderItem from '../FolderItem/FolderItem';
import CreateFolderPopup from '../CreateFolderPopup/CreateFolderPopup';
import addTask from '../../assets/images/add-task.svg';
import allTasks from '../../assets/images/all-tasks.svg';
import FoldersList from '../FoldersList/FoldersList';

function Aside({ folders, setFolders }) {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#C9D1D3');
  const [colors, setColors] = useState([
    {
      color: '#C9D1D3',
      id: uuidv4(),
    },
    {
      color: '#42B883',
      id: uuidv4(),
    },
    {
      color: '#64C4ED',
      id: uuidv4(),
    },
    {
      color: '#FFBBCC',
      id: uuidv4(),
    },
    {
      color: '#B6E6BD',
      id: uuidv4(),
    },
    {
      color: '#C355F5',
      id: uuidv4(),
    },
    {
      color: '#09011A',
      id: uuidv4(),
    },
    {
      color: '#FF6464',
      id: uuidv4(),
    },
  ]);

  function createFolder(newFolder) {
    setFolders([...folders, newFolder]);
  }

  function changeSelectedColor(color) {
    setSelectedColor(color);
  }

  const foldersList = folders.map((item) => {
    return (
      <FolderItem
        folder={item}
        key={item.id}
        selectedColor={selectedColor}></FolderItem>
    );
  });

  return (
    <aside className='aside'>
      {folders.length > 0 && (
        <>
          <button className='aside__top-btn' title='Все задачи'>
            <img src={allTasks} alt='' />
            Все задачи
          </button>
          <FoldersList foldersList={foldersList} />
        </>
      )}
      <button
        className='aside__btn'
        type='button'
        onClick={() => setIsPopupActive(true)}>
        <img src={addTask} alt='' />
        Добавить папку
      </button>
      <CreateFolderPopup
        isPopupActive={isPopupActive}
        setIsPopupActive={setIsPopupActive}
        colors={colors}
        selectedColor={selectedColor}
        changeSelectedColor={changeSelectedColor}
        setColors={setColors}
        createFolder={createFolder}
      />
    </aside>
  );
}

export default Aside;
