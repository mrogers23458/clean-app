import react from "react"
import { useParams } from "react-router-dom"
import Task from "../components/Task"

export default function AreaTaskPage () {

    let area  = useParams();
    console.log(area.name)

    return (
        <div>
            <h3>Choose A Task For</h3>
            <p>{area.name}</p>
            <Task />
        </div>
    )
}
