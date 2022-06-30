import React from 'react';

const AddTask = () => {
    const handleAddTask = event => {
        event.preventDefault();
        const task = event.target.task.value;
        const duration = event.target.duration.value;
        const tasktype = event.target.tasktype.value;
        const tasks = { task, duration, tasktype };

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('New Task added successfully!!!');
                event.target.reset();
            })
    }
    return (
        <div className='mb-10 mt-5'>
            <h1 className='text-xl text-cyan-700 m-4'>Add your To-Do Work </h1>
            <form onSubmit={handleAddTask}>
                <input type="text" name="task" placeholder="Enter Task Here" className="m-2 input input-bordered input-info w-full max-w-xs" /> <br />
                <input type="number" name="duration" placeholder="Duration (in Days)" className="m-2 input input-bordered input-info w-full max-w-xs" /> <br />
                <input type="text" name="tasktype" placeholder="Task Type" className="m-2 input input-bordered input-info w-full max-w-xs" /> <br />
                <input className='btn btn-secondary' type="submit" value="Add to List" />
            </form>

        </div>
    );
};

export default AddTask;