import react from "react"
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom"
import Task from "../components/Task"
import { GET_ONE_AREA } from "../utils/query";
import Navbar from "../components/Navbar";
import '../css/navBarStyle.css'


export default function AreaTaskPage () {

    let area  = useParams();
    console.log(area)
    const trimAreaName = area.name
    console.log(trimAreaName)
    //query with params for tasks
    //i still need to write query on front and back end to get all tasks associated with an area by name
    //then pass that data into task component as props, render tasks in task component with props.map

    const areaObj = {
        areaName: trimAreaName
    }

    const { areaName } = areaObj
    const { loading, data} = useQuery(GET_ONE_AREA, {
        variables: {
            areaName
        }
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


    return (
        <div>
            <Task areaData={data} />
        </div>
    )
}
