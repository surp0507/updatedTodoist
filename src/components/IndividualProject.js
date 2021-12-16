import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {setProjects} from '../Redux/action'
import {setSelectedProject} from '../Redux/action'
import { setShowModal } from '../Redux/action';
import {useSelector,useDispatch} from 'react-redux'
import { firebase } from '../firebase';

export const IndividualProject = () => {
  
const projects=useSelector(state=>state.projectsReducer.projects)
const show=useSelector(state=>state.projectsReducer.show)
const dispatch=useDispatch()
  const handleClose = () => dispatch(setShowModal(false));
  const handleShow = () => dispatch(setShowModal(true));

  const deleteProject = (docId) => {
    alert("i am deleting")
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        dispatch(setProjects([...projects]));
        dispatch(setSelectedProject('INBOX'));
      });
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
      {projects.map(project=>(
        <li key={project.id}>
          <span  className="sidebar__project-name">{project.name}</span>
        </li>
         
      ))}
     
      <span>
         <FaTrashAlt onClick={handleShow}/>
      </span>

       <Modal show={show} onHide={handleClose}>
         <Modal.Body>
          <p className="text-center"> are you sure you want to delete</p>
           </Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <Button variant="secondary" className="btn btn-sm" onClick={handleClose}>
                cancel
              </Button>
              <Button variant="primary" className="mx-5" onClick={()=>deleteProject(project.docId)}>
                Delete
              </Button>
           </div>
        </div>
     </Modal>
    
    </>
  );
};

