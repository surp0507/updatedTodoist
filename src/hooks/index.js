import {  useEffect } from 'react';
import moment from 'moment';
import { useSelector,useDispatch } from 'react-redux';
import { setProjects } from '../Redux/action';
import { setTasks } from '../Redux/action';
import { setArchivedTasks } from '../Redux/action';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTasks = () => {
  const tasks=useSelector(state=>state.tasksReducer.tasks)
  const selectedProject=useSelector(state=>state.projectsReducer.selectedProject)
  const archivedTasks=useSelector(state=>state.tasksReducer.archivedTasks)
  const dispatch=useDispatch()

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'vsJ71lgZ91nkxCwKciNo');

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));

      dispatch(setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : newTasks.filter(task => task.archived !== true)
      ));
     dispatch(setArchivedTasks(newTasks.filter(task => task.archived !== false)));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
const projects=useSelector(state=>state.projectsReducer.projects)
console.log(projects)
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

  return { projects, setProjects };
};
