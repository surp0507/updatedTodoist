import React, { useState } from 'react';
import { setSelectedProject } from '../../Redux/action';
import { setActive } from '../../Redux/action';
import { setShowProjects } from '../../Redux/action';
import { useDispatch,useSelector } from 'react-redux';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
  const active=useSelector(state=>state.sidebarReducer.active)
   console.log(active)
  const showProjects=useSelector(state=>state.sidebarReducer.showProjects)
  const dispatch=useDispatch()

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === 'inbox' ? 'active' : undefined}
        >
          <div
            data-testid="inbox-action"
            aria-label="Show inbox tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              dispatch(setActive('inbox'));
              dispatch(setSelectedProject('INBOX'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setActive('inbox'));
                dispatch(setSelectedProject('INBOX'));
              }
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          data-testid="today"
          className={active === 'today' ? 'active' : undefined}
        >
          <div
            data-testid="today-action"
            aria-label="Show today's tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              dispatch(setActive('today'));
              dispatch(setSelectedProject('TODAY'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setActive('today'));
                dispatch(setSelectedProject('TODAY'));
              }
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          data-testid="next_7"
          className={active === 'next_7' ? 'active' : undefined}
        >
          <div
            data-testid="next_7-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
             dispatch(setActive('next_7'));
              dispatch(setSelectedProject('NEXT_7'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setActive('next_7'));
                dispatch(setSelectedProject('NEXT_7'));
              }
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => dispatch(setShowProjects(!showProjects))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') dispatch(setShowProjects(!showProjects));
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};
