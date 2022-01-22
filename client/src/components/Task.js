import { ApolloClient } from '@apollo/client';
import {React, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_ONE_AREA } from '../utils/query';



export default function Task(props){
    let navigate = useNavigate()
    let params = useParams()
    const id = params.id
    console.log(props)
    const tasks = props.areaData.area.tasks
    const client = props.client

    client.reFetchObservableQueries(GET_ONE_AREA)
    
    const handleNav = function() {
        console.log('handle nav used')

       navigate(`/createtask/${id}`)
    }

    const completedTaskArray = []

    const completionChecker = function (id, name, description){
        console.log(id, name, description)
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
        console.log(checkboxes.length)
    }

    return (
        <div>
            <h1>Tasks for {props.areaData.area.areaName} </h1>
            <div className='completion-bar-holder'>
                <div className='completion-bar'></div>
            </div>
            <div>
                {tasks.map((task) => {
                    return (
                    <div key={task._id}>
                        <h2 > {task.taskTitle}</h2>
                        <p> {task.taskDescription} </p>
                        <input type='checkbox' onClick={() => {completionChecker(task._id, task.taskTitle, task.taskDescription)}}></input>
                    </div>)
                })}
                <div onClick={handleNav}>
                    <h2>Add New Task</h2>
                </div>
            </div>
        </div>
    )
    
}