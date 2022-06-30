import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl">Daily Task Manager</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
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