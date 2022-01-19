import { useQuery, useMutation } from "@apollo/client";
import react from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  Area from "../components/Area"
import '../css/areaSelectStyle.css'
import auth from "../utils/auth";
import { ADDAREA, REMOVEAREA } from "../utils/mutation";
import { GET_USER } from "../utils/query";



export default function AreaSelectPage(props) {
    
    const userInfo = auth.getUser().data;
    const userEmail = userInfo.email
    let navigate = useNavigate();
    console.log(props)
    const client = props.client
    
    const {loading, data} = useQuery(GET_USER, {
        variables: {
            email: userEmail
        }
    })
    
    if (!data) {
        return (
            <div>
                loading...
            </div>
        )
    }

    client.reFetchObservableQueries(GET_USER)

    const handleNav = function () {
        navigate('/createarea')
    }

    if (data.user) {
        const { user } = data
        console.log(user)

        return (
            <div>
                <Area data={user} client={client}/>
            </div>
        )
    }




}

