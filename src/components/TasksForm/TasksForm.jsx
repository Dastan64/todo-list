import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import './TasksForm.scss';

function TasksForm({ task, setTask, createTask, isOpen, setIsOpen }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  function handleChange(e) {
    setTask({ ...task, text: e.target.value });
  }

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      setIsOpen(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      ...task,
      completed: false,
      id: uuidv4(),
    };
    createTask(newTask);
    setTask({
      text: '',
    });
  }

  function cancelInput() {
    setTask({
      text: '',
    });
    setIsOpen(false);
  }
  return (
    <form
      className={`form ${isOpen ? '' : 'form--hidden'} app__form`}
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}>
      <input
        type='text'
        className='form__input'
        value={task.text}
        placeholder='Текст задачи'
        onChange={handleChange}
        ref={inputRef}
        required
      />
      <div className='form__buttons'>
        <Button bgcolor='#4dd599' color='#fff'>
          Добавить задачу
        </Button>
        <Button
          bgcolor='#f4f6f8'
          color='#9c9c9c'
          type='button'
          onClick={cancelInput}>
          Отмена
        </Button>
      </div>
    </form>
  );
}

export default TasksForm;
