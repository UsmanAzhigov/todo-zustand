import { FC } from 'react';

import * as styles from './styles/styles.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { ImRadioUnchecked } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaCheckCircle, FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import useTaskStore from './store/taskStore';

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
    <div className={styles.appContainer}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <IoLogoJavascript />
          Список задач
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputStyle}
            placeholder="Введите текст...."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className={styles.btnAdd} disabled={!input} onClick={addTask}>
            +
          </button>
        </div>
      </div>
      <div>
        <h2 className={styles.allTask}>
          <span onClick={toggleSortOrder} className={styles.sortOrder}>
            {sortOrder === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
          </span>
          Все задачи:
        </h2>
        <ul className={styles.listTask} ref={parent}>
          {sortedTasks.map((task, index) => (
            <li key={index} className={styles.task}>
              <div className={styles.taskName} onClick={() => onChecked(index)}>
                {checkedTasks.includes(index) ? <FaCheckCircle /> : <ImRadioUnchecked />}
                {task}
              </div>
              <div className={styles.btnGroup}>
                <MdEdit style={{ cursor: 'pointer', width: '24px', height: '24px' }} />
                <MdDelete
                  style={{ cursor: 'pointer', width: '24px', height: '24px' }}
                  onClick={() => onDelete(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.btnGroupDelete}>
        <button className={styles.allClear} onClick={allClear}>
          Очистить все
        </button>
        <button className={styles.allClear} onClick={onDeleteSelected}>
          Удалить выбранные
        </button>
      </div>
    </div>
  );
};

export default App;
