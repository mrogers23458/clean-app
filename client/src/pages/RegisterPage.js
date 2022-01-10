//allowing react to use state while updating email and password
import React, {useState} from "react";
//React Router Navigation import
import { useNavigate } from 'react-router-dom'
//helper import
import { validateEmail } from '../utils/helper'
//Use mutation import from apollo
import { useMutation } from "@apollo/client";
//mutations import from mutationjs
import { REGISTER } from '../utils/mutation'


//styling import
import '../css/loginStyle.css';

export default function LoginPage(){
    
    let navigate = useNavigate();

    const [newUserCredentials, setUserCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [register, { error, data, loading }] = useMutation(REGISTER);

    if (error) {
        console.log(error)
        return
    }

    const handleInputChange = (e) => 
        setUserCredentials({...newUserCredentials, [e.target.name]: e.target.value }, console.log('input test'), console.log(e.target));

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log('used handleformsubmit')
        if (
            newUserCredentials.firstName  &&
            newUserCredentials.lastName &&
            newUserCredentials.email &&
            newUserCredentials.password 
            ) {
                
                const { firstName, lastName, email, password } = newUserCredentials
                console.log(newUserCredentials)
                const { userData } =await register({
                    variables: {
                        firstName,
                        lastName,
                        email,
                        password,
                    },
                });

                navigate('/areaselect')
            }
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
                    <input className="firstInput entry" type="text" placeholder="First Name" value={newUserCredentials.firstName} name="firstName" onChange={handleInputChange}></input>

                    {/* Last Name */}
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input className="lastInput entry" type="text" placeholder="Last Name" value={newUserCredentials.lastName} name="lastName" onChange={handleInputChange}></input>

                    {/* email */}
                    <label className="form-label" htmlFor="email">E-mail</label> 
                    <input className="emailInput entry" type="email" placeholder="youremail@provider.com" value={newUserCredentials.email} name="email" onChange={handleInputChange}></input>

                    {/* password */}
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="passwordInput entry" type="password" placeholder="password" value={newUserCredentials.password} name="password" onChange={handleInputChange}></input>

                    {/* buttons */}
                    <div className="loginButtons">
                        <button className="regButton" type="submit" onClick={handleFormSubmit}>Register</button>
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