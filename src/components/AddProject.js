import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import { setProjects } from '../Redux/action';
import { generatePushId } from '../helpers';
import { setShow } from '../Redux/action';
import { setProjectName } from '../Redux/action';
import { useSelector,useDispatch } from 'react-redux';

export const AddProject = () => {
  const projectId = generatePushId();
  const projects=useSelector(state=>state.projectsReducer.projects)
  const show=useSelector(state=>state.addProjectReducer.show)
  const projectName=useSelector(state=>state.addProjectReducer.projectName)
  const dispatch=useDispatch()

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId:'GcGPs3obKErfFpDgkQR8',
      })
      .then(() => {
        dispatch(setProjects([...projects]));
        dispatch(setProjectName(''));
        dispatch(setShow(false));
      });

      const handleChange=(e)=>{
        dispatch(setProjectName(e.target.vaue))
      }

  return (
    <div className="add-project" data-testid="add-project">
      { (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={handleChange}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => dispatch(setShow(false))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') dispatch(setShow(false));
            }}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => dispatch(setShow(!show))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') dispatch(setShow(!show));
        }}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};

AddProject.propTypes = {
  shouldShow: PropTypes.bool,
};
