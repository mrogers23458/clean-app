//allowing react to use state while updating email and password
import React, {useState} from "react";
//React Router Navigation import
import { useNavigate } from 'react-router-dom'
//helper import
import { validateEmail } from '../utils/helper'

//styling import
import '../css/loginStyle.css';

export default function LoginPage(){

    let navigate = useNavigate();

    //creating variables for state and setting their value to an empty string
    //first name and set first state
    const [firstName, setFirstName] = useState('')
    //last name and set last state
    const [lastName, setLastName] = useState('')
    //email and setEmail state
    const [email, setEmail] = useState('')
    //password and setPassword state
    const [password, setPassword] = useState('')
    //error message if form errors
    const [errorMessage, setErrorMessage] = useState('')
    //success message if form is properly submitted
    const [successMessage, setSuccessMessage] = useState('')

    //function for changing state to update with user input
    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name
        const inputValue = target.inputValue

        //update and set state based on user input in a field
        if (inputType ==='firstName') {
            setFirstName(inputValue)
        }

        if (inputType ==='lastName') {
            setLastName(inputValue)
        }

        if (inputType === 'email') {
            setEmail(inputValue)
        }

        if (inputType ==='password') {
            setPassword(inputValue)
        }


    }


    const handleFormSubmit = (e) => {
        //prevent page from refreshing
        e.preventDefault();

        // check to make sure the user has entered a valid email structure with the helper of ValidEmail Function in helper.js
        if (!validateEmail(email)) {
            setErrorMessage('Email is required');
            
            //database logic maybe?
            return;
        }

        //if user successfully registers or logs in re-direct logic goes here
        navigate('/area')
    }


    return (
        <div className="loginContainer">
            <header>
                <h1>Welcome to CleanApp!</h1>
            </header>
            <div className="loginFormHolder">
                <form className="loginForm">
                    {/* First Name */}
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input className="firstInput entry" type="text" placeholder="First Name" value={firstName} name="firstName" onChange={handleInputChange}></input>

                    {/* Last Name */}
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input className="lastInput entry" type="text" placeholder="Last Name" value={lastName} name="lastName" onChange={handleInputChange}></input>

                    {/* email */}
                    <label className="form-label" htmlFor="email">E-mail</label> 
                    <input className="emailInput entry" type="email" placeholder="youremail@provider.com" value={email} name="email" onChange={handleInputChange}></input>

                    {/* password */}
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="passwordInput entry" type="password" placeholder="password" value={password} name="password" onChange={handleInputChange}></input>

                    {/* buttons */}
                    <div className="loginButtons">
                        <button className="regButton" type="submit" onSubmit={handleFormSubmit}>Register</button>
                    </div>
                </form>
            </div>
            <div className="extraLinks">
                <a href="/forgotpassword">Forgot Password?</a>
                <a href="/privacy">Privacy</a>
            </div>
        </div>
    )
}