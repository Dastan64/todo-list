import { useState } from 'react/cjs/react.development';
import './FolderItem.scss';

function FolderItem({ folder, selectedColor }) {
  const { name } = folder;
  const [color, setColor] = useState(selectedColor);

  return (
    <li className='folder-item'>
      <span
        style={{ backgroundColor: color }}
        className='folder-item__circle'></span>
      <a className='folder-item__link' href='https://www.yandex.ru'>
        <p className='folder-item__text'>{name}</p>
      </a>
    </li>
  );
}

export default FolderItem;
