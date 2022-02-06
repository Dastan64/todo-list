import { useEffect, useRef, useState } from 'react';
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
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

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

  function handleKeyDown(e) {
    if (e.code === 'Enter') {
      addFolder();
    } else if (e.code === 'Escape') {
      setIsPopupActive(false);
    }
  }

  const colorsList = colors.map((color) => (
    <div className='popup__check' key={color.id}>
      <label className='popup__check-label'>
        <input
          type='checkbox'
          className='popup__check-input'
          onChange={() => {
            changeSelectedColor(color.color);
          }}
        />
        <span
          className={`popup__check-box ${
            color.color === selectedColor ? 'popup__check-box--active' : ''
          }`}
          style={{ backgroundColor: `${color.color}` }}></span>
      </label>
    </div>
  ));

  return (
    <div
      className={`popup ${isPopupActive ? '' : 'popup--hidden'}`}
      onKeyDown={handleKeyDown}>
      <div className='popup__content'>
        <input
          type='text'
          value={folder.name}
          className='popup__input'
          placeholder='Название папки'
          onChange={(e) => setFolder({ ...folder, name: e.target.value })}
          ref={inputRef}
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
