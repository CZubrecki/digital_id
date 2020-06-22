import { DigitalID } from "../Models/DigitalID";
import { BASE_URL } from './Base-API';
import axios from 'axios';

export async function SubmitForm(data: DigitalID): Promise<any> {
    const token = localStorage.getItem('access_token');
    return axios({
        method: 'post',
        url: `${BASE_URL}digital-id/create-digital-id`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
        },
        data: {
            customerNumber: data.customerNumber,
            givenName: data.givenName,
            surname: data.surname,
            eyes: data.eyes,
            height: data.height,
            sex: data.sex,
            address: data.address,
            city: data.city,
            province: data.province,
            dateOfBirth: data.dateOfBirth,
        }
    });
}