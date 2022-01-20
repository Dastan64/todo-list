import { useState } from 'react/cjs/react.development';
import FolderItem from '../FolderLink/FolderItem';
import './Aside.scss';

function Aside() {
  const [folders, setFolders] = useState([]);
  return (
    <aside className='aside'>
      <h1>Сайдбар</h1>
      <FolderItem></FolderItem>
    </aside>
  );
}

export default Aside;
