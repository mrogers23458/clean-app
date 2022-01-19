import React from "react";

export default function NewTaskForm (props) {
    console.log(props.nameData.areaName)
    return (
        <div className="create-form-container">
            <h1>Add a new task for <br/> {props.nameData.areaName}</h1>
            <form className="add-form">
                <label className="form-label">Task Title</label>
                <input className="entry-box" type='text' placeholder='task title goes here'></input>
                <label className="form-label">Task Description</label>
                <textarea className="task-description" type='textarea' placeholder='task description goes here'></textarea>
                <button className="addTaskButton" type="submit">Add Task</button>
            </form>
        </div>
    )
}