import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {useMutation} from '@apollo/client'
import { REMOVEAREA } from '../utils/mutation';


export default function Area(props){
    //client
    const client = props.client

    //document elements and definitions
    const modal = document.getElementById('myModal')
    const span = document.getElementsByClassName('span')
    const yesBtn = document.querySelector('.yes-button')
    const noBtn = document.querySelector('.no-button')
    const modalText = document.querySelector('.modal-text')
    const user = props.data
    const userEmail = props.data.email
    console.log(userEmail)
    const navigate = useNavigate()

    //hooks and states
    const [modalDetails, setModalDetails] = useState({
        modalAreaName: '',
        modalAreaId: '',
    })
   
    const [removeArea, {data, loading, error}] = useMutation(REMOVEAREA)

    //nav functions
    const handleNav = function(e) {

        const string = e.target.innerText
        const name = string
        if (e.target.innerText === 'Add New +') {
            return navigate('/createarea')
        }

        return navigate(`/areatasks/${name}`)
    }

    const deleteArea = async (args) => {
        console.log('delete area args are here', args)

        const trimName = args.modalAreaName.trim()
        const area = {
            areaName: trimName,
            areaOwner: userEmail
        }
        const { areaName, areaOwner } = area
        console.log(areaName)
        const { data } = await removeArea({
            variables: {
                areaName,
                areaOwner
            }
        })
        

        client.reFetchObservableQueries(REMOVEAREA)
    }
    
    const displayModal = function (e) {

        //full button class name
        const btnClassName = (e.target.className)
        //new button class name to display area name
        const newName = btnClassName.replace('btn', '')
        //id associated with mapped area
        const newId = (e.target.id)
        console.log(newName)

        //set state to be id of mapped area
        setModalDetails({
            modalAreaName: newName,
            modalAreaId: newId,
        })

        //makes modal visible and sets modal text
        modal.style.display = "block"
        modalText.innerText = `are you sure you want to delete ${newName}`

        return newName
    }

    //sets modal diplay to none so it appears hidden
    //fires when no button is clicked on modal
    const clearModal = (e) => {
        modal.style.display = "none"
    }

    //runs remove area mutation named , with state of modalid so the mutation knows which record to remove
    //fires when yes b utton is clicked
    const modalEvent = () => {

        console.log(`deleted modal with className ${modalDetails.modalAreaName}`)
        console.log(modalDetails.modalAreaName, modalDetails.modalAreaId)

        deleteArea(modalDetails)

        modal.style.display = "none"
    }

    console.log(user)

    return (
        <div className="area-select-container">
            <h1>Welcome <br /> {user.firstName}</h1>
            <div className='tiles-holder'>
                {user.areas.map((area) => {
                    return (
                        <div key={area._id} className="tile-container">
                            <div className="area-tile">
                                <h2 className='title' onClick={handleNav}>{area.areaName}</h2>
                                <button className={area.areaName + ' ' + 'btn'} id={area._id} type='submit' onClick={displayModal}>&times;</button>
                            </div>
                        </div>
                    )
                })}

                <button type='button' className='add-area-button tile-container' onClick={handleNav}><h2 className='title'>Add New<span className="addSymbol"> + </span> </h2></button>
                <div id='myModal' className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={clearModal}>&times;</span>
                        <p className='modal-text'>placeholder</p>
                        <div className='modal-buttons'>
                            <button className='yes-button' onClick={modalEvent}><p>Yes</p></button>
                            <button className='no-button' onClick={clearModal}><p>No</p></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
    
}