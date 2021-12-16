
import { FaPizzaSlice } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { AddTask } from '../AddTask';
import { setShowQuickAddTask,setShouldShowMain } from '../../Redux/action';
import { useDispatch } from 'react-redux';

export const Header = ({ darkMode, setDarkMode }) => {
  const dispatch=useDispatch()

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  dispatch(setShowQuickAddTask(true));
                  dispatch(setShouldShowMain(true));
                }}
              >
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
  </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
