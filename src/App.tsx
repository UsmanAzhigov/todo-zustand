import React, { FC } from 'react';
import * as style from './styles/styles.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import useTaskStore from './taskStore';

import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { ImRadioUnchecked } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaCheckCircle, FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';

const App: FC = () => {
  const {
    input,
    tasks,
    checkedTasks,
    sortOrder,
    setInput,
    addTask,
    allClear,
    onDelete,
    onDeleteSelected,
    onChecked,
    toggleSortOrder,
  } = useTaskStore();

  const [parent, enableAnimations] = useAutoAnimate();

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });
  return (
    <div className={style.body}>
      <div className={style.header}>
        <div className={style.headerTitle}>
          <IoLogoJavascript />
          Список задач
        </div>
        <div className={style.inputContainer}>
          <input
            className={style.inputStyle}
            placeholder="Введите текст...."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className={style.btnAdd} disabled={!input} onClick={addTask}>
            +
          </button>
        </div>
      </div>

      <div className={style.blockTasks}>
        <h2 className={style.allTask}>
          Все задачи:
          <span onClick={toggleSortOrder}>
            {sortOrder === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
          </span>
        </h2>
        <ul className={style.listTask} ref={parent}>
          {sortedTasks.map((task, index) => (
            <li key={index} className={style.task} onClick={() => onChecked(index)}>
              <div className={style.taskName}>
                {checkedTasks.includes(index) ? <FaCheckCircle /> : <ImRadioUnchecked />}
                {task}
              </div>
              <div className={style.btnGroup}>
                <MdEdit style={{ cursor: 'pointer', width: '24px', height: '24px' }} />
                <MdDelete
                  onClick={() => onDelete(index)}
                  style={{ cursor: 'pointer', width: '24px', height: '24px' }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.btnGroupDelete}>
        <button className={style.allClear} onClick={allClear}>
          Очистить все
        </button>
        <button className={style.allClear} onClick={onDeleteSelected}>
          Удалить выбранные
        </button>
      </div>
    </div>
  );
};

export default App;
