import { useMutation, useQuery } from "@apollo/client";
import { connect } from "mongoose";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ADDTASK } from "../utils/mutation";
import { GET_ONE_AREA } from "../utils/query";
import AreaName from "./AreaName";

export default function NewTaskForm (props) {
    console.log(props)
    let params = useParams()
    let navigate = useNavigate()
    console.log(params)
    const paramId = params.id
    const client = props.client

    const [addTask, {data, loading, error}] = useMutation(ADDTASK)
    
    const [taskDetails, setTaskDetails] = useState({
        areaId: paramId,
        taskTitle: '',
        taskDescription: ''
    })

    
    const handleUpdate = function (e) {
        console.log(e.target.id)
        console.log(e.target.value)
        
        setTaskDetails({...taskDetails, [e.target.id]:[e.target.value]
        })
        
        console.log(taskDetails)
        
        
    }
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('submit used')
        const areaId = paramId
        const taskTitle = taskDetails.taskTitle[0]
        const taskDescription = taskDetails.taskDescription[0]
        console.log(taskTitle)
        const { data } = await addTask({
            variables: {
                areaId,
                taskTitle,
                taskDescription
            }
        })

        console.log(data)
        return navigate(`/areatasks/${paramId}`)
    }


    return (
        <div className="create-form-container">
                <h1>Add a new task for  <AreaName idInfo={paramId}/> </h1>
                <form className="add-form">
                    <label className="form-label">Task Title</label>
                    <input className="entry-box" id="taskTitle" type='text' placeholder='task title goes here' htmlFor="Task Title" onChange={handleUpdate} ></input>
                    <label className="form-label">Task Description</label>
                    <textarea className="task-description" id="taskDescription" type='textarea' placeholder='task description goes here' htmlFor="taskDescription" onChange={handleUpdate} ></textarea>
                    <button className="addTaskButton" type="submit" onClick={handleSubmit}>Add Task</button>
                </form>
            </div>
        
    )
}