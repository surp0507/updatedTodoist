
import { setSelectedProject } from '../Redux/action';
import { setProjectActive } from '../Redux/action';
import { useSelector,useDispatch } from 'react-redux';
import { IndividualProject } from './IndividualProject';
import {firebase} from '../firebase'
import { setProjects } from '../Redux/action';
import { useEffect } from 'react';


export const Projects = () => {
  const projects=useSelector(state=>state.projectsReducer.projects)
  const active=useSelector(state=>state.projectsReducer.active)
  const dispatch=useDispatch()
 
  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'GcGPs3obKErfFpDgkQR8')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          dispatch(setProjects(allProjects));
        }
      });
  }, [projects]);



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
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};
