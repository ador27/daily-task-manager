import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])
    return (
        <div>
            <h1 className='text-blue-600 text-3xl m-4'>To Do List</h1>
            <h2 className='text-red-400 text-2xl m-4'>Total Task: {tasks.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Details</th>
                            <th>Duration</th>
                            <th>Task Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{task.task}</td>
                                <td>{task.duration}</td>
                                <td>{task.tasktype}</td>
                                <td><Link to={`/edit/${task._id}`}><button class="btn btn-outline">Edit</button></Link></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ToDo;