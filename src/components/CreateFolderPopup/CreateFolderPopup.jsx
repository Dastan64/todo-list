import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateFolderPopup.scss';
import Button from '../Button/Button';
import closePopupBtn from '../../assets/images/close-popup.svg';

function CreateFolderPopup({
  isPopupActive,
  setIsPopupActive,
  colors,
  createFolder,
  selectedColor,
  changeSelectedColor,
}) {
  const [folder, setFolder] = useState({
    name: '',
  });

  function addFolder() {
    if (folder.name === '') {
      return;
    }
    const newFolder = {
      ...folder,
      color: selectedColor,
      id: uuidv4(),
    };
    createFolder(newFolder);
    setFolder({
      name: '',
    });
  }

  const colorsList = colors.map((color) => (
    <span
      className={`popup__color-option ${
        color.color === selectedColor ? 'popup__color-option--active' : ''
      }`}
      key={color.id}
      style={{ backgroundColor: `${color.color}` }}
      onClick={() => {
        changeSelectedColor(color.color);
      }}></span>
  ));

  return (
    <div className={`popup ${isPopupActive ? '' : 'popup--hidden'}`}>
      <div className='popup__content'>
        <input
          type='text'
          value={folder.name}
          className='popup__input'
          placeholder='Название папки'
          onChange={(e) => setFolder({ ...folder, name: e.target.value })}
        />
        <div className='popup__colors'>{colorsList}</div>
        <Button
          bgcolor='#4DD599'
          color='white'
          className='popup__btn'
          onClick={addFolder}>
          Добавить
        </Button>
        <button
          type='button'
          className='popup__close-btn'
          title='Закрыть модальное окно'
          onClick={() => setIsPopupActive(!isPopupActive)}>
          <img src={closePopupBtn} alt='' />
        </button>
      </div>
    </div>
  );
}

export default CreateFolderPopup;
