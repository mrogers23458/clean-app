import React from "react";
import Tile from "../components/Tile"
import '../css/areaSelectStyle.css'

//TODO: Generate these tiles as an array of objects from the database

const tiles = [
    {
        name: 'Bathroom',
        className: 'bathroom',
        img: '',
        id: 1
    },
    {
        name: 'Bedroom',
        className: 'bedroom',
        img: '',
        id: 2
    },
    {
        name: 'Dining Room',
        className: 'dining',
        img: '',
        id: 3
    },
    {
        name: 'Kitchen',
        className: 'kitchen',
        img: '',
        id: 4
    },
    {
        name: 'Living Room',
        className: 'living',
        img: '',
        id: 5
    },
    {
        name: 'Add New',
        className: 'add',
        img: '',
        id: 6
    },
]
export default function AreaSelectPage() {

    return(
        <div className="mainContainer">
            <h2>Pick an area to clean</h2>
            <div className="tile-container">
                {tiles.map((tile) => (
                    <Tile name={tile.name} key={tile.id} className={tile.className} />
                ))}
            </div>
        </div>
    )

}

