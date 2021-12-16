import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setSelectedProject } from '../Redux/action';
import { setProjectActive } from '../Redux/action';
import { useSelector,useDispatch } from 'react-redux';
import { IndividualProject } from './IndividualProject';

export const Projects = () => {
  const projects=useSelector(state=>state.projectsReducer.projects)
  const active=useSelector(state=>state.projectsReducer.active)
  const dispatch=useDispatch()
 


  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            dispatch(setProjectActive(project.projectId));
            dispatch(setSelectedProject(project.projectId));
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              dispatch(setProjectActive(project.projectId));
              dispatch(setSelectedProject(project.projectId));
            }
          }}
        >
          <IndividualProject  />
        </div>
      </li>
    ))
  );
};

Projects.propTypes = {
  activeValue: PropTypes.bool,
};
