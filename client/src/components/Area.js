import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_ALL_AREAS } from '../utils/query';

export default function Area(props){

    const name = props.name
    const description = props.description

    return (
        <div>
            <h3>
                welcome {props.first}
            </h3>
        </div>
    )
    
}