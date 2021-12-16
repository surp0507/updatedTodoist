import React from 'react';
import {setProject,setShowProjectOverlay} from '../Redux/action'
import { useSelector,useDispatch } from 'react-redux';

export const ProjectOverlay = () => {
  const projects=useSelector(state=>state.projectsReducer.projects)
  const showProjectOverlay=useSelector(state=>state.addTaskReducer.showProjectOverlay)
  const dispatch=useDispatch()

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li key={project.projectId}>
              <div
                data-testid="project-overlay-action"
                onClick={() => {
                  dispatch(setProject(project.projectId));
                  dispatch(setShowProjectOverlay(false));
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    dispatch(setProject(project.projectId));
                    dispatch(setShowProjectOverlay(false));
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Select the task project"
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

