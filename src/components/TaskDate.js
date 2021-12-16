import React from 'react';
import moment from 'moment';
import { setTaskDate,setShowTaskDate } from '../Redux/action';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const TaskDate = () =>{

  const showTaskDate=useSelector(state=>state.addTaskReducer.showTaskDate)

  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li>
          <div
            onClick={() => {
              dispatch(setShowTaskDate(false));
              dispatch(setTaskDate(moment().format('DD/MM/YYYY')));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setShowTaskDate(false));
                dispatch(setTaskDate(moment().format('DD/MM/YYYY')));
              }
            }}
            data-testid="task-date-today"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              dispatch(setShowTaskDate(false));
              dispatch(setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY')));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setShowTaskDate(false));
                dispatch(setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY')));
              }
            }}
            data-testid="task-date-tomorrow"
            role="button"
            tabIndex={0}
            aria-label="Select tomorrow as the task date"
          >
            <span>
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              dispatch(setShowTaskDate(false));
              dispatch(setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY')));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setShowTaskDate(false));
                dispatch(setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY')));
              }
            }}
            data-testid="task-date-next-week"
            aria-label="Select next week as the task date"
            tabIndex={0}
            role="button"
          >
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next week</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

