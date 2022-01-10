import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import  Area from "../components/Area"
import  NewAreaForm  from "../components/NewAreaForm"
import { GET_ALL_AREAS, GET_USER } from "../utils/query";
import { GETAREA } from "../utils/mutation"
import '../css/areaSelectStyle.css'
import { useNavigate } from "react-router-dom";


export default function AreaSelectPage() {

    const { loading, data} = useQuery(GET_USER, {
        variables: {email: "testuser1@email.com"}
    })

    const user = data

    console.log(user)
    console.log(data)


    return (
       <div>
           <h2>TEST</h2>
           <Area name={'testName'} />
       </div> 
    )

}

