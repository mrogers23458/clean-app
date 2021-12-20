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

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

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
        navigate('/areaselect')
    }


    return (
        <div className="LoginContainer">
            <header>
                <h1>Welcome to CleanApp!</h1>
            </header>
            <div className="loginFormHolder">
                <form className="loginForm">
                    <label className="email-label" for="email">E-mail</label> 
                    <input className="emailInput" type="email" placeholder="youremail@provider.com" name="email"></input>
                    <label className="password-label" for="password">Password</label>
                    <input className="passwordInput" type="password" placeholder="password" name="password"></input>
                    <div className="loginButtons">
                        <button className="regButton" type="submit" onSubmit={handleFormSubmit}>Register</button>
                        <button className="logButton" type="submit" onSubmit={handleFormSubmit}>Login</button>
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