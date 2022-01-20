import { v4 as uuidv4 } from 'uuid';
import TaskItem from '../TaskItem/TaskItem';

function TasksList({ tasks, deleteTask }) {

    const tasksList = tasks.length > 0 && tasks.map(task => <TaskItem task={task} key={uuidv4()} deleteTask={deleteTask}></TaskItem>)
    return (
        <>
            {tasksList.length > 0 &&
                <div className="app__tasks">

                    {tasksList}
                </div>
            }
        </>

    );
}

export default TasksList;