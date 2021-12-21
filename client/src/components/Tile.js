import React from 'react';

export default function Tile(props){
    
    return(
        <div className='tile'>
            <div className={props.className}>
                <div className="tile-header">
                    <h3 className="tile-title">{props.name}</h3>
                </div>
            </div>
        </div>
    )

}