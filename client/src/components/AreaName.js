import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ONE_AREA } from "../utils/query";

export default function AreaName(props) {
    console.log(props)
    const id = props.idInfo

    const {loading, error, data } = useQuery(GET_ONE_AREA, {
        variables: {
            areaId: id
        }
    })

    if (loading) {
        return <div>
            loading...
        </div>
    }

    if (error) {
        return <div>
            There was an error
        </div>
    }

    if (data?.area) {
        return (
            <div>
                {data.area.areaName}
            </div>
        )
    }

    return <div>
        AREA NAME
    </div>
}