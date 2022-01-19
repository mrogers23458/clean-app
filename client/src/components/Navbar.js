import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/auth';

export default function Navbar() {

    let navigate = useNavigate()
    const logOutNow = function () {
        auth.logout()
        navigate('/')
    }

    const handleNav = function (linkName) {
        switch (linkName) {
            case 'Home':
                navigate('/')
                break
            case 'Register':
                navigate('/register')
                break
            case 'Areas':
                navigate('/areaselect')
                break
            case 'Logout':
                navigate('/')
                auth.logout()
                break
        }

        hideLinks()
    }

    function hideLinks() {

        var x = document.getElementById("links");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    if (auth.loggedIn()) {
        return (
            <div className='position-margin'>
                <div className='nav-container' onClick={() => {hideLinks()}}>
                    <i className='fa fa-bars'></i>
                </div>
                <div id='links' className='links-container'>
                        <li onClick={()=> {handleNav('Home')}}> Home </li>
                        <li onClick={()=> {handleNav('Areas')}}> Areas </li>
                        <li onClick={()=> {handleNav('Logout')}}> Logout </li>
                </div>
            </div>
        )
    } else {
        return (
            <div className='position-margin'>
                <div className='nav-container' onClick={() => {hideLinks()}}>
                    <i className='fa fa-bars'></i>
                </div>
                <div id='links' className='links-container'>
                        <li onClick={()=> {handleNav('Home')}}> Home </li>
                        <li onClick={()=> {handleNav('Register')}}> Register </li>
                </div>
            </div>
        )
    }

}