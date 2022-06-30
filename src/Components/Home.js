import React from 'react';
import AddTask from './AddTask';

const Home = () => {
    return (
        <div>
            <div className='m-10'>
                <h1 className='text-blue-600 text-3xl'>Welcome to Daily Task Manager</h1>
            </div>

            <AddTask></AddTask>

        </div>
    );
};

export default Home;