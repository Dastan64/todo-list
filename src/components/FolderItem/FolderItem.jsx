import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import './FolderItem.scss';

function FolderItem({ folder, selectedColor }) {
  const { name } = folder;
  const [color, setColor] = useState(selectedColor);

  return (
    <li className='folder-item'>
      <span
        style={{ backgroundColor: color }}
        className='folder-item__circle'></span>
      <Link className='folder-item__link' to={'/' + folder.id}>
        <p className='folder-item__text'>{name}</p>
      </Link>
    </li>
  );
}

export default FolderItem;
