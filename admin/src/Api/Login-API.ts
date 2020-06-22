import { BASE_URL } from './Base-API';
import axios from 'axios';

export function SignInUser(email: string, password: string): Promise<any> {
    return axios({
        method: 'post',
        url: `${BASE_URL}auth/login`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: {
            username: email,
            password: password,
        }
    });
}