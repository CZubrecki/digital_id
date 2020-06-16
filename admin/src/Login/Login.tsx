import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')

    const login = async () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/auth/login',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            data: {
                username: email,
                password: password,
            }
        }).then((res) => {
            if (res.data.access_token) {
                const token = res.data.access_token;
                localStorage.setItem('access_token', token);
            }

            //Redirect to form page
        }).catch((error) => { console.log(error) });
    }

    return (
        <div>
            <form>
                <div>
                    <TextField id="outlined-basic" placeholder="Email" type="email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div style={{
                    marginTop: '25px'
                }}>
                    <TextField id="outlined-basic" placeholder="Password" type="password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: '25px'
                }}>
                    <Button variant="contained" onClick={() => login()}>Login</Button>
                </div>
            </form>
        </div>
    );
}