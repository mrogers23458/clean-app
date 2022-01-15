import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { ADDAREA } from '../utils/mutation';
import Auth from '../utils/auth'
import { useNavigate } from 'react-router-dom';
import { GET_USER } from '../utils/query';

export default function NewAreaForm(){
    
    let navigate = useNavigate();

    const newOwner = Auth.getUser().data.email
    console.log(newOwner)

    const owner = 'mrogers1@email.com'
    const [areaDetails, setAreaDetails] = useState({
        areaName: '',
        areaDescription: '',
        areaOwner: ''
    })
    
    const [addNewArea, { error, data, loading }] = useMutation(ADDAREA)

    if (error) {
        console.log(error)
        return
    }

    const handleAreaUpdate = (e) => {
        setAreaDetails({
            ...areaDetails,
            [e.target.name]: e.target.value,
            areaOwner: newOwner
        })

        console.log(e.target.name)
        console.log(e.target.value)
        console.log(areaDetails)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        console.log('used handleform submit')

        if (
            areaDetails.areaName &&
            areaDetails.areaDescription &&
            areaDetails.areaOwner
        ) {
            console.log('used conditional')
            const { areaName, areaDescription, areaOwner } = areaDetails
            console.log(areaDetails)
            const { data } = await addNewArea({
                variables: {
                    areaName,
                    areaDescription,
                    areaOwner
                }
            });


            console.log(data)
            navigate('/areaselect')
        }
            

    }

    return (
        <div>
            <h2>Add a new area</h2>
            <div className="areaCard">
                <form>
                    <label htmlFor='areaName'>Area Name</label>
                    <input type='text' name="areaName" onChange={handleAreaUpdate} placeholder="Area Name"></input>
                    <label htmlFor='areaDescription'>Description</label>
                    <input type='text' name="areaDescription" onChange={handleAreaUpdate} placeholder="Description of area"></input>
                    <button type='submit' onClick={handleFormSubmit} >Add Area</button>
                </form>
            </div>
        </div>
    )
    }