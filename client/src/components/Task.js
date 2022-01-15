import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTasks } from "../data"

export default function Task(props){
    let params = useParams()
    console.log(params)
    console.log(props)
    

    return(
        <div>
            task component
        </div>
    )

}