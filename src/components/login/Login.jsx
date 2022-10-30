import "./Login.scss"
import React from 'react';
import { useState } from "react"
function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Fac_ID, setFac_ID] = useState('')

    const userlogin = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:3000/users/Login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Email,
                    Password,
                    Fac_ID
                })
            })
            const data = res.json()
            if (res.status === 400) {
                alert("somthing went wrong")
            }else if(res.status === 200){
                alert("all ok ")
            }
        } catch {

        }


    }
    return (
        <div className="App">
            <form method="POST" onSubmit={userlogin} className="container App">
                <div>
                    <h1>Log in</h1>
                    <h3>Mark the attendance in a digital way!</h3>
                </div>
                <div className="your-input">
                    <div className="your-input">
                        <div className="input">
                            <input type="email" name="Email" id="Email" required placeholder="Enter Email" autoComplete="off"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input">
                            <input type="text" name="Fac_ID" id="Fac_ID" placeholder="Enter ID" required autoComplete="off"
                                value={Fac_ID}
                                onChange={(e) => setFac_ID(e.target.value)} />
                            <label htmlFor="facID">Faculty ID</label>
                        </div>
                        <div className="input">
                            <input type="password" name="Password" id="Password" required placeholder="Enter Password" autoComplete="off"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password">
                                Password
                            </label>
                        </div>
                    </div>
                </div>
                <a href="/#">Forgot Password?</a>
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}
export default Login;
