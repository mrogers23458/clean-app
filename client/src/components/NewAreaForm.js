import React, { useState } from 'react';

export default function NewAreaForm(){

/*     const handleAddNew = function (){
        const [newAreaCredentials, setAreaCredentials] = useState({
            areaName: '',
            areaDescription: '',
        });
    } */

    return (
        <div>
            <h2>Add a new area</h2>
            <div className="areaCard">
                <form>
                    <label htmlFor='areaName'>Area Name</label>
                    <input type='text' name="areaName" placeholder="Area Name"></input>
                    <label htmlFor='areaDescription'>Description</label>
                    <input type='text' name="areaDescription" placeholder="Description of area"></input>
                    <button type='submit'>Add Area</button>
                </form>
            </div>
        </div>
    )
}