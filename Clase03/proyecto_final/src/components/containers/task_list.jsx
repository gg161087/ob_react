import React from 'react';

import { Task } from './../../models/task.class.js';
import { LEVELS } from '../../models/levels.enum.js';
import TaskComponent from './../pure/task.jsx';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('Cambiar estado de una tarea');
    }

    return (
        <div>
            <div>
                <h1>Your Task:</h1>                
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;