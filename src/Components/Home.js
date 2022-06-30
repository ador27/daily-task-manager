import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='m-10'>
                <h1 className='text-blue-600 text-3xl'>Welcome to Daily Task Manager</h1>
            </div>

            <div className='mb-10 mt-5'>
                <h1 className='text-xl text-cyan-700 m-4'>Add your To-Do Work </h1>
                <input type="text" placeholder="Enter Task Here" class="m-2 input input-bordered input-info w-full max-w-xs" /> <br />
                <input type="text" placeholder="Work Name" class="m-2 input input-bordered input-info w-full max-w-xs" /> <br />
                <input type="text" placeholder="Work Name" class="m-2 input input-bordered input-info w-full max-w-xs" />
            </div>

        </div>
    );
};

export default Home;