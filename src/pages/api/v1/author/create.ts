import { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const apiUrl = "http://localhost:8080/api/v1/author/create";

    try {
        const response = await axios.post(apiUrl);
        console.log(response)
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Request did not reach' });
    }
}
