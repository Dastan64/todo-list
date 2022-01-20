import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateFolderPopup.scss';
import Button from '../Button/Button';
import closePopupBtn from '../../assets/images/close-popup.svg';

function CreateFolderPopup() {
    const [selectedColor, setSelectedColor] = useState(0);
    const [isPopupActive, setIsPopupActive] = useState(true);
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

    const colorsList = colors.map((color, index) => (
        <span
            className={`popup__color-option ${index === selectedColor ? 'popup__color-option--active' : ''
                }`}
            key={color.id}
            style={{ backgroundColor: `${color.color}` }}
            onClick={() => {
                setSelectedColor(index)
            }}></span>
    ));
    return (
        <div className={`popup ${isPopupActive ? '' : 'popup--hidden'}`}>
            <div className='popup__content'>
                <input type='text' className='popup__input' placeholder='Название папки' required />
                <div className='popup__colors'>{colorsList}</div>
                <Button bgcolor='#4DD599' color='white' className='popup__btn'>
                    Добавить
                </Button>
                <button
                    type='button'
                    className='popup__close-btn'
                    title='Закрыть модальное окно'
                    onClick={() => setIsPopupActive(!isPopupActive)}
                >
                    <img src={closePopupBtn} alt='' />
                </button>
            </div>
        </div>
    );
}

export default CreateFolderPopup;
