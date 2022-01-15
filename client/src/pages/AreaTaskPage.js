import react from "react"
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom"
import Task from "../components/Task"
import { GET_ALL_AREAS } from "../utils/query";

export default function AreaTaskPage () {

    let area  = useParams();
    console.log(area)
    const areaName = area.name
    //query with params for tasks
    //i still need to write query on front and back end to get all tasks associated with an area by name
    //then pass that data into task component as props, render tasks in task component with props.map
    const { loading, data} = useQuery(GET_ALL_AREAS, {
        variables: {areaName: 'bathroom'}
    })

    if (!data) {
        console.log('no data check hit')
        return (
            <div>
                loading...
            </div>
        )
    }
    console.log(data)
    console.log(data.areas[0].tasks)
    const { areas } = data
    console.log(areas)

    return (
        <div>
            <h3>Choose A Task For</h3>
            <p>{area.name}</p>
            <Task tasks={areas} />
        </div>
    )
}
