import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/loginStyle.css';
import { useMutation } from "@apollo/client";
import { LOGIN } from '../utils/mutation'
import Auth from '../utils/auth'

export default function LoginPage(){
    let navigate = useNavigate();

    //set sate for login credentials
    const [loginInfo, setLoginInfo] = useState(
        {
            email: '',
            password: '',
        }
    );

    //login mutation
    const [login, {error, data, loading}] = useMutation(LOGIN);
    
    // function to set login state to the value of the targeted field as user inputs
    const handleInputChange = function(e) {
        return setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
    }

    //on form submit, check login info
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log('handle form submit used')
        console.log(loginInfo)
        
        if (loginInfo.email && loginInfo.password) {
            const { email, password } = loginInfo
            const { data } = await login(
                {
                    variables: {
                        email,
                        password
                    },
                }
            );

            if(!data?.email) {
                console.log('loading')
            }

            if (data) {
                console.log('data check hit')
                await Auth.login(data.login.token)
                return navigate('/areaselect')
            }
        }
    }

    return (
        <div className="loginContainer">
            <header>
                <h1>Welcome to CleanApp!</h1>
            </header>
            <div className="loginFormHolder">
                <form className="loginForm">
                    <label className="form-label" htmlFor="email">E-mail</label> 
                    <input className="emailInput entry" type="email" placeholder="youremail@provider.com" value={loginInfo.email} name="email" onChange={handleInputChange}></input>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="passwordInput entry" type="password" placeholder="password" value={loginInfo.password} name="password" onChange={handleInputChange}></input>
                    <div className="loginButtons">
                        <button className="logButton" type="submit" onClick={handleFormSubmit}>Login</button>
                    </div>
                </form>
            </div>
            <div className="extraLinks">
                <p>Dont have an account? <a href="/register">Register</a> for one now!</p>
                <div className='footer-links'>
                <a href="/forgotpassword">Forgot Password?</a>
                <a href="/privacy">Privacy</a>
                </div>
            </div>
        </div>
    )
}