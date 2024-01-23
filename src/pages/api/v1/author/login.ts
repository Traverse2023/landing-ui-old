import { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('req4', req)
    const apiUrl = "http://localhost:8080/api/v1/author/login";
    console.log("in login handler")
    try {
        const response = await axios.post(apiUrl, {email: req.body.email, password: req.body.password});
        console.log(response)
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Request did not reach' });
    }
}