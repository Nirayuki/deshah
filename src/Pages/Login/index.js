import React from 'react';
import '../../styles/login.css';


export default function Login() {
    return (
        <>  
            <div className="login_container">
            <center>
                <form autoComplete="off" id="login" class="login">
                    <input id="name" name="name" type="text" placeholder="Username" onFocus maxLength="20"/>
                    <input id="password" type="password" placeholder="Password" maxLength="20"/>
                    <button type="submit">Sign in</button>
                </form>
                </center>
            </div>
        </>
    )
}