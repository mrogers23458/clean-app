import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getTasks } from "../data"

export default function Task(){
    let tasks = getTasks();
    console.log(tasks)

    return(
        <div className='area-tile'>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )

}