import './FolderItem.scss';

function FolderItem() {
  return (
    <li className='folder-item'>
      <span
        style={{ backgroundColor: 'red' }}
        className='folder-item__circle'></span>
      <a className='folder-item__link' href='https://www.yandex.ru'>
        <p className='folder-item__text'>Фильмы и сериалы</p>
      </a>
    </li>
  );
}

export default FolderItem;
