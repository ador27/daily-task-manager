import React from 'react';
import AddTask from './AddTask';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div>
            <div className='m-10'>
                <h1 className='text-blue-600 text-3xl'>Welcome to Daily Task Manager</h1>
            </div>

            <AddTask></AddTask>

            <ToDo></ToDo>

        </div>
    );
};

export default Home;