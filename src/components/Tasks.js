import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { firebase } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { setTasks } from '../Redux/action';
import { setArchivedTasks } from '../Redux/action';

export const Tasks = () => {
  const tasks=useSelector(state=>state.tasksReducer.tasks)
   const selectedProject=useSelector(state=>state.projectsReducer.selectedProject)
   const projects=useSelector(state=>state.projectsReducer.projects)
   const dispatch=useDispatch()
  let projectName = '';

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
   
    projectName = getTitle(projects, selectedProject);
    
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
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



  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
  );
};
