import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './Login.css';

 function Login() {

    return (
      <div className="root">
        <form action="" className="form">
          <img src="avatar.png" alt="avtar" className="avatar" />
          <h2>Login</h2>
        

          <div className="input-grp">
            <label for="FirstName">First Name</label>

            <input className="inp" type="text" name="FirstName" value="" required/>
          </div>
          

          <div className="input-grp">
            <label for="LastName">Last Name</label>
            <input className="inp" type="text" name="LastName" value="" required/>
          </div>


          <div className="input-grp">
            <label for="Email">Email</label>
            <input className="inp" type="email" name="Email" value="" required/>
          </div>

          <div className="input-grp">
            <label for="Password">Password</label>
            <input className="inp" type="password" name="Password" value="" required/>
          </div>

          <div className="button">
            <input type="submit" value="submit" className="submit-btn"/>
          </div>
          <img src="google-plus.png" alt="google" className="logo-google" height="50px" width="50px"/>
          <a href="www.google.com" className="link">login with google</a>
      </form>
    </div>
    )
}


export default Login