import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditTask = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tasks/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data));
    }, [])

    const handleEditTask = event => {
        event.preventDefault();
        const task = event.target.task.value;
        const duration = event.target.duration.value;
        const tasktype = event.target.tasktype.value;
        const UpdatedTask = { task, duration, tasktype };

        const url = `http://localhost:5000/tasks/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Task Edited successfully!!!');
                event.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-3xl text-green-700 m-8'>Edit Task: {task.task}</h2>
            <form onSubmit={handleEditTask}>
                <input type="text" name="task" placeholder="Enter Task Here" className="m-2 input input-bordered input-info w-full max-w-xs" /> <br />
                <input type="date" name="duration" placeholder="duration" className="m-2 input input-bordered input-info w-full max-w-xs" /> <br />
                <input type="text" name="tasktype" placeholder="Task Type" className="m-2 input input-bordered input-info w-full max-w-xs" /> <br />
                <input className='btn btn-secondary m-4' type="submit" value="Update Task" />
            </form>

        </div>
    );
};

export default EditTask;