import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NewTaskForm from './NewTaskForm';

export default function Task(props){
    let params = useParams()
    console.log(params)
    console.log(props)
    console.log(props.areaData)
    console.log(props.areaData.area)
    console.log(props.areaData.area.tasks)
    const propsName = props.areaData.area
    const tasks = props.areaData.area.tasks

    if (tasks == '') {
        return(
            <div>
               <NewTaskForm nameData={propsName}/>
            </div>
        )
    }

    return (
        <div>
            some tasks found
        </div>
    )


}