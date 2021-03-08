import React from 'react';
import '../../styles/register.css';


export default function Register(){
    return(
        <>  
            <div className="register_container">
            <center>
                <form autoComplete="off" id="register">
                    <input id="email" type="email" name="email" placeholder="Email" onFocus/>
                    <input id="name" name="name" type="text" placeholder="Username" maxLength="20"/>
                    <input id="password" type="password" placeholder="Password" maxLength="20"/>
                    <button type="submit">Register</button>
                </form>
                </center>
            </div>
        </>
    )
}