import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {useMutation} from '@apollo/client'
import { REMOVEAREA } from '../utils/mutation';


export default function Area(props){

    const client = props.client

    const navigate = useNavigate()
    const handleNav = function(e) {
        console.log(e.target.innerText)
        const string = e.target.innerText
        const name = string.replace(/\s+/g, "")
        console.log(name)
        return navigate(`/areatasks/${name}`)
    }

    const user = props.data
    console.log(props)

    const [removeArea, {data, loading, error}] = useMutation(REMOVEAREA)

    const clickme = async (e) => {

        const areaId = {
            id: e.target.id
        }
        const { id } = areaId
        console.log(id)
        const { data } = await removeArea({
            variables: {
                id
            }
        })

        client.reFetchObservableQueries(REMOVEAREA)
    }

    console.log(user)

    return (
        <div>
            <h3>
                welcome {user.firstName}
            </h3>
            {user.areas.map((area) => {
                return (
                <div className={area.areaName} key={area._id} >
                    <h4 className={'title'} onClick={handleNav}>{area.areaName}</h4>
                    <p className='description'></p>
                    <button id={area._id} type='submit' onClick={clickme}><i className="fa fa-close"></i></button>
                </div>

                )
            })}
        </div>
    )
    
}