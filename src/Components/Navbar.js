import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-blue-200">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-2xl">Daily Task Manager</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/completed'>Completed</Link></li>
                        <li><Link to='/to-do-list'>To-Do List</Link></li>
                        <li><Link to='/calender'>Calender</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;