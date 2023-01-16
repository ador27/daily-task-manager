import React from 'react';

const Complete = () => {
    const { task } = task;
    const markComplete = () => {
        fetch(`http://localhost:5000/tasks/completed/${task}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <input onClick={markComplete} type="radio" name="radio-2" className="radio radio-primary" />

        </div>
    );
};

export default Complete;