import React from 'react'
import Separator from '../../common/separator'
import Header from '../header'
import './sign-in.css'

function SignIn() {
  return (
    <div>
    <Header />
    <Separator/>
    <div class="login-box">
        <h2>Login</h2>
        <form>
            <div class="user-box">
                <input type="text" name="" required=""></input>
                <label>Username</label>
            </div>
            <div class="user-box">
                <input type="password" name="" required=""></input>
                <label>Password</label>
            </div>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
            </form>
        </div>
    </div>
  )
}

export default SignIn